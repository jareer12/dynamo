apt update
apt install nginx

killall nginx

npm install forever -g

cd /root
rm -r Dynamo
rm -r dynamo

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

content=$(wget https://raw.githubusercontent.com/jareer12/dashboard/main/nginx/ubuntu.conf -q -O -)
echo $content > /etc/nginx/sites-enabled/default
