docker rm $(docker ps -a -q)
docker rmi $(docker images -q) --force
docker volume rm $(docker volume ls -q)
docker system prune