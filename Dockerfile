FROM node:23.11-alpine3.20 AS builder

WORKDIR /app

COPY . .

RUN npm run setup
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]