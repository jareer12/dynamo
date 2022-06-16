"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const express_1 = __importDefault(require("express"));
const ProxyManager = (0, express_1.default)();
class ReverseProxy {
    Instances;
    constructor() {
        this.Instances = [
            { scheme: "http", host: "home.jubot.site", port: 7000 },
            { scheme: "http", host: "root.jubot.site", port: 3000 },
        ];
    }
    start() {
        ProxyManager.listen(process.env.REVERSE_PROXY_PORT, function () {
            console.log(`Reverse Proxy Started at http://localhost:${process.env.REVERSE_PROXY_PORT}`);
        });
    }
    restart() {
        console.log(`Restarting proxy`);
    }
}
const Proxy = new ReverseProxy();
ProxyManager.use("*", function (req, res, next) {
    console.log(req.host);
    Proxy.Instances.forEach((server) => {
        if (server.host == req.hostname) {
            try {
                delete req.headers.host;
                let FetchURL = `${server.scheme}://${process.env.SERVER_IP_ADDRESS}:${server.port}${req.path}`;
                (0, node_fetch_1.default)(FetchURL, {
                    body: req.body,
                    method: req.method,
                    headers: req.headers,
                })
                    .then((response) => response.text())
                    .then((data) => {
                    res.end(data);
                })
                    .catch((err) => {
                    res.failure({ Message: "Internal Server Error" });
                });
            }
            catch {
                res.failure({ Message: "Internal Server Error" });
            }
        }
    });
});
exports.default = Proxy;
