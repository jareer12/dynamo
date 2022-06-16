
sudo certbot certonly -d 165.227.167.192 -d 165.227.167.192

sudo certbot certonly --standalone -d root.jubot.site \
    --non-interactive --agree-tos -m jub0trd@gmail.com \
    --http-01-port=8888

certbot certonly --noninteractive --agree-tos --cert-name slickstack -d ${SITE_TLD} -d www.${SITE_TLD} -d \
    staging.${SITE_TLD} -d dev.${SITE_TLD} --register-unsafely-without-email --webroot -w /var/www/html/
