rm -r /root/Dynamo
rm -r /root/dynamo
rm -r /var/www/dynamo

killall nginx
forever list | grep your_app | `awk '/\[0\]/{print "forever stop "$8}'` 
