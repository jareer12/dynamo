docker volume rm $(docker volume ls -q) --force
docker rm $(docker ps -a -q) --force
docker rmi -f $(docker images -aq) --force