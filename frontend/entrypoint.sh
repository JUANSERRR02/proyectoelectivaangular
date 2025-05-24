set -e

certbot --nginx -d shin.com --non-interactive --agree-tos --email your-email@example.com

nginx -s reload

exec nginx -g "daemon off;"