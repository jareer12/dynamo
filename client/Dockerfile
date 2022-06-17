FROM node

WORKDIR /client
COPY . /client/

RUN npm install -g http-server
RUN npm install -g forever
RUN npm install

RUN npm run build
RUN ls

RUN forever start -c http-server dist --brotli --gzip --cors --port 8080
# CMD ["forever" "start" "-c" "http-server" "dist" "--port" "4545" "--brotli" "--gzip" "--cors"] 

EXPOSE 8080 4545 3000