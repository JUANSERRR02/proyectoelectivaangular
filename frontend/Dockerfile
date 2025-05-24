FROM node:22.15.0-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

COPY . .
RUN npm run build

FROM nginx:stable

RUN apt-get update && \
    apt-get install -y certbot python3-certbot-nginx

COPY default.conf /etc/nginx/conf.d/

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80 443

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]