ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

ENV NODE_ENV=production

WORKDIR /webapp

FROM base as build

COPY --link package.json package-lock.json ./

RUN npm install
RUN npm prune

COPY --link . .

RUN npm run build

FROM base as production

ENV PORT=${PORT}

COPY --from=build /webapp/.output /webapp/.output

CMD ["node", ".output/server/index.mjs"]