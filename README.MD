# Dynamo

## Table of Contents

- [Shell Install](#Installation)
- [Docker Install](#Installation)

## Requirements(Minimum)

- **1GB Ram**
- **1 CPU**
- **30GB**

## Installation

### Docker

If you use docker you can install Dynamo using this command although its not recommended and gives you less freedom over the code.

- [Documentation](./docs/UbuntuDocker.MD)

```sh
git clone https://github.com/jareer12/dynamo.git Dynamo
cd Dynamo
docker-compose up -d
```

### Shell

Here is a one-liner to install Dynamo. Make sure nothing is running on ports `7000` and `80`, also kill all running instances of NGinx.

- [Documentation](./docs/UbuntuShell.MD)

```shell
wget -O - https://raw.githubusercontent.com/jareer12/dynamo/main/install-ubuntu.sh | bash
```
