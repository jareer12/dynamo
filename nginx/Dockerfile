FROM ubuntu
RUN apt-get -y update && apt-get -y install nginx

COPY nginx.conf /etc/nginx/sites-available/default

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
EXPOSE 80