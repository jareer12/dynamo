import shell from "shelljs";
import DB from "../plugins/sql";
import { readFileSync, writeFileSync } from "fs";

const OS: string = process.platform;

if (OS.toLowerCase() === "linux") {
  try {
    const NginxConfPath: string = `/etc/nginx/sites-enabled/default`;
    const NginxConf: String = readFileSync(NginxConfPath, "utf-8");
    console.log(NginxConf);
    DB.getReverseProxies(1000).then((Proxies: object[]) => {
      console.log(Proxies);
      let Config: string = `
include /*.conf;

server {
    listen  8080;

    root  /var/www/dynamo;
    index index.html index.htm;

    location / {
      root /var/www/dynamo;
      try_files $uri /index.html;
    }
        
    error_log  /var/log/nginx/dynamo-error.log;
    access_log /var/log/nginx/dynamo-access.log;
}

`;

      Proxies.forEach((proxy: any) => {
        Config += `
server {
    listen ${proxy.port};
    server_name ${proxy.host};

    location / {
        proxy_pass ${proxy.target}:${proxy.targetPort};
    }
}
`;
      });
      try {
        writeFileSync(NginxConfPath, Config, "utf-8");
        console.log(`Successfuly written nginx`);
      } catch (err) {
        console.log(err);
      }

      const CMD = shell.exec(`killall nginx && nginx && cat ${NginxConfPath}`);
    });
  } catch (err) {
    console.log(err);
  }
} else {
  console.log(
    `Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`
  );
}
