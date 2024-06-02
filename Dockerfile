## Build stage ##
FROM node:18.18-alpine as build
WORKDIR /app

# Copy package.json and yarn.lock to the working directory, install dependencies first
COPY package*.json ./
COPY yarn.lock ./ 
RUN yarn install

COPY . .
RUN yarn build-only

## Run stage ##
FROM nginx:stable-alpine
RUN mkdir /run
COPY --from=build /app/build /run
COPY nginx.conf /etc/nginx/nginx.conf