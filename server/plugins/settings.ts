import { basename } from "path";
import fs from "fs";

const __root: String = __dirname.replace(basename(__dirname), "");

class Settings {
  constructor() {}
  read(): string {
    return fs.readFileSync(`${__root}/settings/permissions.json`, "utf-8");
  }
  get() {
    return JSON.parse(this.read());
  }
  write(data: JSON) {
    return fs.writeFileSync(
      `${__root}/settings/permissions.json`,
      JSON.stringify(data, null, 4),
      "utf-8"
    );
  }
  update(master: string, option: string, value: boolean | string) {
    const Data = this.get();
    Data[master][option] = value;
    this.write(Data);
  }
}

export default new Settings();
