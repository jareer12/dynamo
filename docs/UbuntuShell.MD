# Install via Shell(Ubuntu)

By default you will find the backend at `http://127.0.0.1:7000`. Also you will have to configure the [NGinx](#NGinx) file located at `/etc/nginx/sites-enabled/default`. Make sure you put your own `server_name` in the configure file.

```shell
wget -O - https://raw.githubusercontent.com/jareer12/dynamo/main/install-ubuntu.sh | bash
```

- [NGinx Config](#NGinx)

# NGinx

```shell
nano /etc/nginx/sites-enabled/default
```

```nginx
server {
    listen 80;
    server_name api.example.com; ## Backend Domain

    location / {
        proxy_pass http://127.0.0.1:7000;
    }
}
```

```nginx
server {
    listen      80;
    server_name example.com; ## Frontend Domain

    root     /var/www/dynamo;
    index   index.html index.htm;

    location / {
        root /var/www/dynamo;
        try_files $uri /index.html;
    }

    error_log  /var/log/nginx/vue-app-error.log;
    access_log /var/log/nginx/vue-app-access.log;
}
```
