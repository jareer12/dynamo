FRONTEND=/root/dynamo/static/dist

## Initializing Stage
cd
rm -r Dynamo
rm -r dynamo
mkdir /root/dynamo
mkdir $FRONTEND

## Install Stage
git clone https://github.com/jareer12/dynamo.git Dynamo
cd Dynamo/client && npm install && npm run build
mv /root/Dynamo/server/* /root/dynamo

## Install Frontend
rm -r $FRONTEND
mkdir $FRONTEND
mv /root/Dynamo/client/dist/* $FRONTEND
cd $FRONTEND
ls

## Setup Backend
cd
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