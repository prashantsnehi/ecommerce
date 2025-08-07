FROM node:22.16.0-alpine AS build

WORKDIR /app

RUN npm cache clean --force

COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:latest as ngi

RUN apt update
RUN apt install -y vim
RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

COPY --from=build  /app/dist/fast-tag/browser/ /usr/share/nginx/html/
COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80