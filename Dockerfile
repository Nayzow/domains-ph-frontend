FROM node:18.12.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/dns-service-frontend /usr/share/nginx/html
