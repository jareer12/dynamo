"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dockerode_1 = __importDefault(require("dockerode"));
const randstr_1 = __importDefault(require("../plugins/randstr"));
let docker = new dockerode_1.default({ socketPath: "/var/run/docker.sock" });
let image = `mysql/mysql-server:latest`;
function main(Data) {
    let args = `--rm --name mysql-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=${Data.password || (0, randstr_1.default)(16)} -d mysql`;
    console.log(`Deploying MySQL Image`);
    docker.run(image, args, process.stdout, {
        name: "mysql",
        HostConfig: { AutoRemove: true, NetworkMode: "my_network" },
    }, function (err, data, container) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            console.log(container);
        }
    });
}
exports.default = main;
