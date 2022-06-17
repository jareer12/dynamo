import Docker from "dockerode";
import randStr from "../plugins/randstr";

let docker = new Docker({ socketPath: "/var/run/docker.sock" });
let image: string = `mysql/mysql-server:latest`;

export default function main(Data: { name: string; password?: string }) {
  let args: any = `--rm --name mysql-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=${
    Data.password || randStr(16)
  } -d mysql`;
  console.log(`Deploying MySQL Image`);

  docker.run(
    image,
    args,
    process.stdout,
    {
      name: "mysql",
      HostConfig: { AutoRemove: true, NetworkMode: "my_network" },
    },
    function (err: any, data: any, container: any) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        console.log(container);
      }
    }
  );
}
