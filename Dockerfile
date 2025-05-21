FROM node:23.11-alpine3.20 AS builder
WORKDIR /app
COPY . .
RUN npm run setup
RUN npm run build

FROM builder AS prepare
RUN npm prune --production

CMD ["npm", "run", "start"]
