# Base image
FROM node:20-alpine

WORKDIR /app

RUN npm install -g create-react-app

RUN npx create-react-app frontend --template typescript

WORKDIR /app/frontend

RUN sed -i 's/"start": "react-scripts start"/"start": "PORT=3001 react-scripts start"/' package.json

EXPOSE 3001