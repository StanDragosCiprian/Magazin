# Base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

EXPOSE 3001

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Create a new Angular app
RUN ng new my-app --defaults=true --directory=.

EXPOSE 3001

RUN sed -i 's/"start": "ng serve"/"start": "ng serve --host 0.0.0.0 --port 3001"/' package.json

EXPOSE 3001
