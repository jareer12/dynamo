import DB from "../plugins/sql";
import { spawn } from "child_process";
import { readFileSync, writeFileSync } from "fs";

const OS: string = process.platform;

if (OS.toLowerCase() === "linux") {
  try {
    const NginxConfPath: string = `/etc/nginx/sites-enabled/default`;
    const NginxConf: String = readFileSync(NginxConfPath, "utf-8");
    console.log(NginxConf);
    DB.getReverseProxies(1000).then((Proxies: object[]) => {
      console.log(Proxies);
      let Config: string = ``;

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

      const CMD = spawn(`killall nginx && nginx && cat ${NginxConfPath}`);
      CMD.stdout.on("data", (data) => {
        console.log(data);
      });
    });
  } catch (err) {
    console.log(err);
  }
} else {
  console.log(
    `Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`
  );
}
