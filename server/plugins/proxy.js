"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const sql_1 = __importDefault(require("../plugins/sql"));
const OS = process.platform;
if (OS.toLowerCase() === "linux") {
    try {
        const NginxConfPath = `/etc/nginx/sites-enabled/default`;
        const NginxConf = (0, fs_1.readFileSync)(NginxConfPath, "utf-8");
        console.log(NginxConf);
        let Config = ``;
        const Proxies = [
            {
                host: "dynamo.jubot.site",
                target: "http",
            },
        ];
        Proxies.forEach((proxy) => {
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
            (0, fs_1.writeFileSync)(NginxConfPath, Config, "utf-8");
        }
        catch (err) {
            console.log(err);
        }
        sql_1.default.getReverseProxies(50)
            .then((data) => {
            console.log(data);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    catch (err) {
        console.log(err);
    }
}
else {
    console.log(`Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`);
}
