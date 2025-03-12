FROM node:18.20.7-alpine AS build

WORKDIR /app

RUN npm cache clean --force

COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:latest as ngi

COPY --from=build  /app/dist/fast-tag/browser/ /usr/share/nginx/html/
COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80