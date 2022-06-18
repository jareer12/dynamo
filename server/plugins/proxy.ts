import { fsyncSync, readFileSync, writeFileSync } from "fs";
import DB from "../plugins/sql";

const OS: string = process.platform;
if (OS.toLowerCase() === "linux") {
  try {
    const NginxConfPath: string = `/etc/nginx/sites-enabled/default`;
    const NginxConf: String = readFileSync(NginxConfPath, "utf-8");
    console.log(NginxConf);

    let Config: string = ``;
    const Proxies: object[] = [
      {
        port: "80",
        host: "dynamo.jubot.site",
        target: "http://127.0.0.1",
        targetPort: "8080",
      },
    ];

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
    } catch (err) {
      console.log(err);
    }
    DB.getReverseProxies(50)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
} else {
  console.log(
    `Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`
  );
}
