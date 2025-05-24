#!/bin/bash
set -e

EMAIL="your-email@example.com"

if ! certbot certificates | grep -q "shin.com"; then
  echo "Obtaining SSL certificate for shin.com..."
  certbot --nginx -d shin.com --non-interactive --agree-tos --email "$EMAIL"
else
  echo "SSL certificate for shin.com already exists."
fi

echo "Reloading Nginx..."
nginx -s reload

echo "Starting Nginx in the foreground..."
exec nginx -g "daemon off;"