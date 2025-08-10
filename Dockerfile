# Stage 1: Build the Angular app
FROM node:22.16.0-alpine AS build

WORKDIR /app

RUN npm cache clean --force

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:latest as ngi

# setting the local time to Asia/Kolkata
RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/Asia/Kolkata /etc/localtime

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app from previous stage
COPY --from=build  /app/dist/fast-tag/browser/ /usr/share/nginx/html/

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]