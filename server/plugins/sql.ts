import randStr from "../plugins/randstr";
import mysql from "mysql2";

let conn: any = mysql.createConnection({
  host: "localhost",
  database: "test",
  password: "",
  user: "root",
});

class Master {
  constructor() {}
  storageFileInfo(name: string, mime: string, destiny: string, id: string) {
    conn.query(
      `INSERT INTO cdn_files(id, name, created, destiny, extension) VALUES(?, ?, ?, ?, ?)`,
      [id, name, new Date().getTime(), destiny, mime],
      function (err: string, data: any[]) {
        if (err) {
          console.log(err);
        } else {
          //  console.log(data);
        }
      }
    );
  }
}
export default new Master();
