docker build --rm --tag dynamo .
docker run -d -p 7000:7000 -p 3000:3000 -it --name dynamo dynamo

## OR
docker-compose up -d