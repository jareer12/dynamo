docker system prune --force
docker rm $(docker ps -a -q) --force
docker volume rm $(docker volume ls -q) --force 