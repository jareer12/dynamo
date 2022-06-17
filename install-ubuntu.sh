clear
apt update
apt install nginx

npm install forever -g

cd /root
rm -r Dynamo
rm -r dynamo
rm -r /root/dynamo
rm -r /var/www/dynamofront

git clone https://github.com/jareer12/dynamo.git Dynamo

mkdir /var/www/dynamofront
mkdir /root/dynamo

mv /root/Dynamo/client/* /var/www/dynamofront
mv /root/Dynamo/server/* /root/dynamo

cd /var/www/dynamofront
npm install
npm run build

cd ..
mv ./dynamofront/dist ./dynamo
rm -r dynamofront

cd /root
cd ./dynamo

npm install
echo "PUBLIC_PORT=7000" > .env
forever start ./src/Index.js

rm /etc/nginx/sites-enabled/default.save
NGINX_CONF=/etc/nginx/sites-enabled/default

rm $NGINX_CONF
touch $NGINX_CONF
content='
server {
    listen 80;
    server_name api.jubot.site;

    location / {
        proxy_pass http://127.0.0.1:7000;
    }
}

server {
    listen      80;
    server_name dash.jubot.site;

    root     /var/www/dynamo;
    index   index.html index.htm;

    location / {
        root /var/www/dynamo;
        try_files $uri /index.html;
    }
        
    error_log  /var/log/nginx/vue-app-error.log;
    access_log /var/log/nginx/vue-app-access.log;
}

'
echo $content >  $NGINX_CONF

killall nginx
nginx