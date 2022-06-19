FRONTEND=/root/dynamo/static/dist

## Initializing Stage
cd
rm -r Dynamo
rm -r dynamo
rm -r /root/dynamo
rm -r /var/www/dynamofront
rm -r $FRONTEND
mkdir $FRONTEND
mkdir /root/dynamo

## Install Stage
git clone https://github.com/jareer12/dynamo.git Dynamo
mv /root/Dynamo/client/* $FRONTEND
mv /root/Dynamo/server/* /root/dynamo

## Install Frontend
cd $FRONTEND
npm install
npm run build
cd /root

## Setup Backend
cd ./dynamo
npm install
npm install forever -g
npm install ts-node -D
npm run build
forever start ./src/Index.js

## Setup Frontend(Proxy)
apt install nginx
rm /etc/nginx/sites-enabled/default.save
NGINX_CONF=/etc/nginx/sites-enabled/default
rm $NGINX_CONF
touch $NGINX_CONF
content='

server {
    listen      8080;

    root     /var/www/dynamo;
    index   index.html index.htm;

    location / {
        root /var/www/dynamo;
        try_files $uri /index.html;
    }
        
    error_log  /var/log/nginx/dynamo-err.log;
    access_log /var/log/nginx/dynamo-access.log;
}

'
echo $content >  $NGINX_CONF
killall nginx
nginx

## Finish
cd ..
rm -r Dynamo