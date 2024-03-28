ARG NODE_IMAGE=node
ARG NODE_VERSION=20.11.1-alpine

ARG NGINX_IMAGE=nginx
ARG NGINX_VERSION=1.25.1-alpine

ARG TOKEN

FROM --platform=linux/amd64 $NODE_IMAGE:$NODE_VERSION as build
WORKDIR /app

COPY package.json ./
RUN npm install

COPY .vitepress content ./
RUN npm run build

FROM --platform=linux/amd64 $NGINX_IMAGE:$NGINX_VERSION as final

# Настройка Nginx
RUN touch /var/run/nginx.pid \
	&& chown -R nginx:nginx /var/cache/nginx /var/run/nginx.pid
COPY nginx.conf /etc/nginx/nginx.conf

# Копирование статических файлов
COPY --from=build /app/.vitepress/dist/ /usr/share/nginx/html

USER nginx

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]
