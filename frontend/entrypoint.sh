#!/bin/bash
set -e

EMAIL="your-email@example.com"

if ! certbot certificates | grep -q "shin.com"; then
    echo "Obtaining SSL certificate for shin.com..."
    # Obtain the SSL certificate and configure Nginx
    certbot --nginx -d shin.com --non-interactive --agree-tos --email "$EMAIL"
else
    echo "SSL certificate for shin.com already exists."
fi

if [ ! -f "/etc/letsencrypt/options-ssl-nginx.conf" ]; then
    echo "Generating options-ssl-nginx.conf..."
    # Copy the default options-ssl-nginx.conf from Certbot
    cp /etc/letsencrypt/renewal/shin.com.conf /etc/letsencrypt/options-ssl-nginx.conf
fi

echo "Reloading Nginx..."
nginx -s reload

echo "Starting Nginx in the foreground..."
exec nginx -g "daemon off;"