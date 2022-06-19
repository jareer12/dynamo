import randStr from "../plugins/randstr";
import { basename } from "path";
import mysql from "mysql2";
import fs from "fs";

const __root = __dirname.replace(basename(__dirname), "");
conn = {
  query() {
    console.log(`MySQL has not connected yet`);
  },
};
try {
  if (process.env.SQL_USER && process.env.SQL_HOST) {
    var conn: any = mysql.createConnection({
      port: parseFloat(process.env.SQL_PORT),
      database: process.env.SQL_DATABASE,
      password: process.env.SQL_PASS || ``,
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
    });
  } else {
    console.log(`MySQL config not found`);
  }
} catch {
  console.log(
    `Unable to connect to mysql, re-check Mysql config and make sure it's installed`
  );
}

class Master {
  constructor() {
    const dbs = `${__root}/sql`;
    const Databases: string[] = fs.readdirSync(dbs);
    Databases.forEach((db) => {
      conn.query(
        fs.readFileSync(`${dbs}/${db}`, "utf-8"),
        function (err: any, data: any) {
          if (err) {
            console.log(err);
          }
        }
      );
    });
  }
  async storageFileInfo(name: string, mime: string, id: string, cloud: string) {
    return new Promise((res, rej) => {
      conn.query(
        `INSERT INTO cdn_files(id, name, created, extension, cloud) VALUES(?, ?, ?, ?, ?)`,
        [id, name, new Date().getTime(), mime, cloud],
        function (err: string, data: any[]) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        }
      );
    });
  }
  async getStorageClouds(limit: number = 50) {
    return new Promise((res, rej) => {
      conn.query(
        `SELECT * FROM storage_clouds LIMIT ?`,
        [limit],
        function (err: string, data: any[]) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        }
      );
    });
  }
  async createStorageCloud(name: string) {
    return new Promise((res, rej) => {
      const created: number = new Date().getTime();
      conn.query(
        `INSERT INTO storage_clouds(id, name, created) VALUES(?, ?, ?)`,
        [randStr(8), name, created],
        function (err: string, data: any[]) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        }
      );
    });
  }
  async getReverseProxies(limit: number = 50) {
    return new Promise((res, rej) => {
      conn.query(
        `SELECT * FROM reverse_proxies LIMIT ?`,
        [limit],
        function (err: string, data: any[]) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        }
      );
    });
  }
  async getReverseProxyById(id: string) {
    return new Promise((res, rej) => {
      conn.query(
        `SELECT * FROM reverse_proxies WHERE id = ?`,
        [id],
        function (err: string, data: any[]) {
          if (err) {
            rej(err);
          } else {
            res(data[0]);
          }
        }
      );
    });
  }
  async createReverseProxy(
    name: string,
    target: string,
    targetPort: number,
    host: string,
    port: number
  ) {
    return new Promise((res, rej) => {
      conn.query(
        `INSERT INTO reverse_proxies(id, name, target, targetPort, host, port, created) VALUES(?, ?, ?, ?, ?, ?, ?)`,
        [
          randStr(11),
          name,
          target,
          targetPort,
          host,
          port,
          new Date().getTime(),
        ],
        function (err: string, data: any[]) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        }
      );
    });
  }
}
export default new Master();
