# Production image for footprints.thephillips.family — Vite build + Express family gate.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --include=dev
COPY . .
RUN npm test && npm run build

FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund
COPY server/ ./server/
COPY --from=build /app/dist ./dist
ENV NODE_ENV=production PORT=5000
USER node
EXPOSE 5000
CMD ["node", "server/server.cjs"]
