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

WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]