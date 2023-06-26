# Base image
FROM node:20-alpine

WORKDIR /app

RUN npm i -g @nestjs/cli

RUN nest new backend --package-manager npm --directory .

EXPOSE 3000