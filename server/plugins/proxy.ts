import { readFileSync } from "fs";

const OS: string = process.platform;
if (OS.toLowerCase() === "linux") {
  const NginxConfPath: string = `/etc/nginx/sites-eanbled/default`;
  const NginxConf: String = readFileSync(NginxConfPath, "utf-8");
  console.log(NginxConf);
} else {
  console.log(
    `Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`
  );
}
