FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY next.config.js ./next.config.js

CMD ["yarn", "dev"]