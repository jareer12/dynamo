docker volume rm $(docker volume ls -q)
docker rmi -f $(docker images -aq)
docker rm $(docker ps -a -q)