# syntax=docker/dockerfile:1.7

FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

COPY Frontend/package*.json ./
RUN npm ci

COPY Frontend .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app/backend
ENV NODE_ENV=production

COPY Backend/package*.json ./
RUN npm ci --omit=dev

COPY Backend .
COPY --from=frontend-builder /app/frontend/dist ./public

EXPOSE 3000
CMD ["node", "index.js"]

