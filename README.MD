# Dynamo

You are most likely tired of large corporates selling your data or charging you a lot of money for small cloud services? This is where Dynamo comes in, what is Dynamo? It's a self-hosted cloud platform application.

As of today, Dynamo is only available for Ubuntu-based machines.

## Table of Contents

- [Shell Install](#Docker)
- [Docker Install](#Shell)

## Requirements(Minimum)

- **2 CPUs**
- **2GB Ram**
- **25GB Storage**

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

Here is a one-liner to install Dynamo. Make sure nothing is running on ports `7000` , `8080`, `80`.

- [Documentation](./docs/UbuntuShell.MD)

```shell
wget -O - https://raw.githubusercontent.com/jareer12/dynamo/main/install-ubuntu.sh | bash
```
