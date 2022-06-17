apt update
apt install nginx

killall nginx

npm install forever -g

cd /root
rm -r Dynamo
rm -r dynamo
rm -r /root/dynamo
rm -r /var/www/dynamofront

git clone https://github.com/jareer12/dashboard.git Dynamo

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

NGINX_CONF=/etc/nginx/sites-enabled/default

rm $NGINX_CONF
touch $NGINX_CONF
content=$(wget https://raw.githubusercontent.com/jareer12/dashboard/main/nginx/ubuntu.conf -q -O -)
echo $content >  $NGINX_CONF
