# Install via Shell(Ubuntu)

By default you will find the backend at `http://127.0.0.1:7000`. Also you will have to configure the [NGinx](#NGinx) file. Make sure you put your own `server_name` in the configure.

```shell
wget -O - https://raw.githubusercontent.com/jareer12/dynamo/main/install-ubuntu.sh | bash
```

- [NGinx Config](#NGinx)

# NGinx

```nginx
server {
    listen 80;
    server_name api.jubot.site; ## Backend Domain

    location / {
        proxy_pass http://backend:7000;
    }
}

server {
    listen      80;
    server_name dash.jubot.site; ## Frontend Domain

    root     /usr/share/nginx/html;
    index   index.html index.htm;

    location / {
        root /usr/share/nginx/html;
        try_files $uri /index.html;
    }

    error_log  /var/log/nginx/vue-app-error.log;
    access_log /var/log/nginx/vue-app-access.log;
}
```
