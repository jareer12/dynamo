"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
let conn = mysql2_1.default.createConnection({
    host: "localhost",
    database: "test",
    password: "",
    user: "root",
});
class Master {
    constructor() { }
    storageFileInfo(name, mime, destiny, id) {
        conn.query(`INSERT INTO cdn_files(id, name, created, destiny, extension) VALUES(?, ?, ?, ?, ?)`, [id, name, new Date().getTime(), destiny, mime], function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
            }
        });
    }
}
exports.default = new Master();
