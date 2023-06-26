# Base image
FROM node:20-alpine

WORKDIR /app

RUN npm install -g @vue/cli

RUN vue create frontend --inlinePreset '{"useConfigFiles": false, "plugins": {"@vue/cli-plugin-typescript": {}}}' --packageManager npm

WORKDIR /app/frontend

RUN sed -i 's/"serve": "vue-cli-service serve"/"serve": "vue-cli-service serve --port 3001"/' package.json

EXPOSE 3001