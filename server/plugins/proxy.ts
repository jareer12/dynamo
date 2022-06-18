import { spawn } from "child_process";
import { readFileSync, writeFileSync } from "fs";

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
        host: "api.jubot.site",
        target: "http://127.0.0.1",
        targetPort: "7000",
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

    spawn("nginx");
  } catch (err) {
    console.log(err);
  }
} else {
  console.log(
    `Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`
  );
}
