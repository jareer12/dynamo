"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const OS = process.platform;
if (OS.toLowerCase() === "linux") {
    try {
        const NginxConfPath = `/etc/nginx/sites-enabled/default`;
        const NginxConf = (0, fs_1.readFileSync)(NginxConfPath, "utf-8");
        console.log(NginxConf);
    }
    catch (err) {
        console.log(err);
    }
}
else {
    console.log(`Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`);
}
