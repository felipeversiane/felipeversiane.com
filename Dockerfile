FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN npm install --silent

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.mjs ./next.config.mjs
COPY --from=build /app/package*.json ./

RUN npm install --silent --production

EXPOSE 3000

CMD ["npm", "start"]
