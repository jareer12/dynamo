"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("../plugins/sql"));
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const OS = process.platform;
if (OS.toLowerCase() === "linux") {
    try {
        const NginxConfPath = `/etc/nginx/sites-enabled/default`;
        const NginxConf = (0, fs_1.readFileSync)(NginxConfPath, "utf-8");
        console.log(NginxConf);
        let Config = ``;
        const Proxies = [
            {
                port: "80",
                host: "api.jubot.site",
                target: "http://127.0.0.1",
                targetPort: "7000",
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
        try {
            sql_1.default.getReverseProxies(50)
                .then((data) => {
                console.log(data);
            })
                .catch((err) => {
                console.log(err);
            });
        }
        catch { }
        (0, child_process_1.spawn)("nginx");
    }
    catch (err) {
        console.log(err);
    }
}
else {
    console.log(`Operating System(OS) is not Ubuntu, Detected ${OS}, Proxy will not work.`);
}
