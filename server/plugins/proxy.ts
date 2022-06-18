import { readFileSync } from "fs";
import DB from "../plugins/sql";

const OS: string = process.platform;
if (OS.toLowerCase() === "linux") {
  try {
    const NginxConfPath: string = `/etc/nginx/sites-enabled/default`;
    const NginxConf: String = readFileSync(NginxConfPath, "utf-8");
      console.log(NginxConf);
      
      
  } catch (err) {
    console.log(err);
  }
} else {
  console.log(
    `Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`
  );
}
