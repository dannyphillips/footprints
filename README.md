> **Archived.** This app now lives in the [dannyphillips/apps](https://github.com/dannyphillips/apps) monorepo at [`apps/footprints`](https://github.com/dannyphillips/apps/tree/main/apps/footprints). This repository is read-only.

# Footprints

A mobile-first log for visiting all 59 U.S. national parks. Each park is shown with its album poster from `static/posters/*.jpg`.

Visited parks are stored in this browser under the `localStorage` key `footprints.visited`. There is no account and no server database. No environment variables are required.

## Local development

Requires Node.js 22.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm test
npm run build
npm run preview
```

`npm run build` copies `static/posters/*.jpg` into `dist/posters/` and the app requests them at `/posters/<slug>.jpg`. Leave the original files in place; do not replace or regenerate the artwork.

## Deploy on Dokku

The container is `nginx:alpine` serving the production build on port **5000**. Target host: `footprints.thephillips.family`.

On the Hetzner Dokku server:

```bash
dokku apps:create footprints
dokku domains:set footprints footprints.thephillips.family
dokku ports:set footprints http:80:5000
```

From a clone of this repo, on `main`:

```bash
git remote add dokku dokku@your-hetzner-host:footprints
git push dokku main
```

After DNS points at the server:

```bash
dokku letsencrypt:enable footprints
```
