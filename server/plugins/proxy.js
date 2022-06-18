"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const OS = process.platform;
if (OS.toLowerCase() === "linux") {
    const NginxConfPath = `/etc/nginx/sites-eanbled/default`;
    const NginxConf = (0, fs_1.readFileSync)(NginxConfPath, "utf-8");
    console.log(NginxConf);
}
else {
    console.log(`Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`);
}
