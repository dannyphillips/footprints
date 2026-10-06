import { cpSync, createReadStream, existsSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import type { Connect, Plugin } from "vite";
import { defineConfig } from "vitest/config";

const root = path.dirname(fileURLToPath(import.meta.url));
const postersDir = path.join(root, "static/posters");

function posterFiles(): string[] {
  return readdirSync(postersDir).filter((name) => name.endsWith(".jpg"));
}

function servePosters(middlewares: Connect.Server) {
  middlewares.use("/posters", (req, res, next) => {
    const requestPath = (req.url ?? "/").split("?")[0] ?? "/";
    const name = decodeURIComponent(requestPath).replace(/^\//, "");
    if (!name || name.includes("/") || name.includes("..") || !name.endsWith(".jpg")) {
      next();
      return;
    }

    const file = path.join(postersDir, name);
    if (!existsSync(file)) {
      next();
      return;
    }

    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader("Cache-Control", "public, max-age=86400");
    createReadStream(file).on("error", () => {
      res.statusCode = 500;
      res.end();
    }).pipe(res);
  });
}

function postersPlugin(): Plugin {
  return {
    name: "static-posters",
    configureServer(server) {
      servePosters(server.middlewares);
    },
    configurePreviewServer(server) {
      servePosters(server.middlewares);
    },
    writeBundle(options) {
      const files = posterFiles();
      if (files.length !== 59) {
        this.error(`Expected 59 posters in static/posters, found ${files.length}`);
      }

      const outDir = options.dir ?? path.join(root, "dist");
      const dest = path.join(outDir, "posters");
      mkdirSync(dest, { recursive: true });
      for (const name of files) {
        cpSync(path.join(postersDir, name), path.join(dest, name));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), postersPlugin()],
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
