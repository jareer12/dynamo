"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randstr_1 = __importDefault(require("../plugins/randstr"));
const path_1 = require("path");
const mysql2_1 = __importDefault(require("mysql2"));
const fs_1 = __importDefault(require("fs"));
const __root = __dirname.replace((0, path_1.basename)(__dirname), "");
try {
    if (process.env.SQL_USER && process.env.SQL_HOST) {
        var conn = mysql2_1.default.createConnection({
            port: parseFloat(process.env.SQL_PORT),
            database: process.env.SQL_DATABASE,
            password: process.env.SQL_PASS,
            host: process.env.SQL_HOST,
            user: process.env.SQL_USER,
        });
    }
    else {
        console.log(`MySQL config not found`);
    }
}
catch {
    console.log(`Unable to connect to mysql, re-check Mysql config and make sure it's installed`);
}
class Master {
    constructor() {
        const dbs = `${__root}/sql`;
        const Databases = fs_1.default.readdirSync(dbs);
        Databases.forEach((db) => {
            conn.query(fs_1.default.readFileSync(`${dbs}/${db}`, "utf-8"), function (err, data) {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
    async storageFileInfo(name, mime, id, cloud) {
        return new Promise((res, rej) => {
            conn.query(`INSERT INTO cdn_files(id, name, created, extension, cloud) VALUES(?, ?, ?, ?, ?)`, [id, name, new Date().getTime(), mime, cloud], function (err, data) {
                if (err) {
                    rej(err);
                }
                else {
                    res(data);
                }
            });
        });
    }
    async getStorageClouds(limit = 50) {
        return new Promise((res, rej) => {
            conn.query(`SELECT * FROM storage_clouds LIMIT ?`, [limit], function (err, data) {
                if (err) {
                    rej(err);
                }
                else {
                    res(data);
                }
            });
        });
    }
    async createStorageCloud(name) {
        return new Promise((res, rej) => {
            const created = new Date().getTime();
            conn.query(`INSERT INTO storage_clouds(id, name, created) VALUES(?, ?, ?)`, [(0, randstr_1.default)(8), name, created], function (err, data) {
                if (err) {
                    rej(err);
                }
                else {
                    res(data);
                }
            });
        });
    }
    async getReverseProxies(limit = 50) {
        return new Promise((res, rej) => {
            conn.query(`SELECT * FROM reverse_proxies LIMIT ?`, [limit], function (err, data) {
                if (err) {
                    rej(err);
                }
                else {
                    res(data);
                }
            });
        });
    }
}
exports.default = new Master();
