FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server
RUN npm install -g forever

# make the 'app' folder the current working directory
WORKDIR /client

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./client/

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build


# CMD ["forever" "start" "-c" "http-server" "dist" "--port" "4545" "--brotli" "--gzip" "--cors"] 
CMD ["http-server" "dist" "--port" "4545"]
EXPOSE 4545
