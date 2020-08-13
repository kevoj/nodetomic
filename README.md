# node-cool-boilerplate

### Install

```bash
git clone https://github.com/kevoj/node-cool-boilerplate
```
```bash
cd node-cool-boilerplate
```
```bash
yarn
```

### Setup

Create file **.env**

#### Dev

```bash
NAME=node-cool-boilerplate
MODE=development
HOST=localhost
PORT=8000
WS=8001
DOMAIN=localhost
URI_DB=mongodb://127.0.0.1:27017/example-dev
URI_REDIS=redis://:@127.0.0.1:6379/0
URI_WS_REDIS=redis://127.0.0.1:6379/1
JWT_SECRET=shhhh
```

#### Test

```bash
NAME=node-cool-boilerplate
MODE=test
HOST=localhost
PORT=9000
WS=9001
DOMAIN=test.example.com
URI_DB=mongodb://user_test:3dF9zDWYrVYsUveG@localhost:27017/example-test
URI_REDIS=redis://:QbZ948wBGVpUwurF@127.0.0.1:6379/2
URI_WS_REDIS=redis://:QbZ948wBGVpUwurF@127.0.0.1:6379/3
JWT_SECRET=KYTzTm5U7LKSh4ma
```

#### Prod

```bash
NAME=node-cool-boilerplate
MODE=production
HOST=localhost
PORT=9000
WS=9001
DOMAIN=prod.example.com
URI_DB=mongodb://user_prod:9M27WKgRNbvqfxYT@localhost:27017/example-prod
URI_REDIS=redis://:FgkTHsjEEPG4w77p@127.0.0.1:6379/0
URI_WS_REDIS=redis://:FgkTHsjEEPG4w77p@127.0.0.1:6379/1
JWT_SECRET=ZTnpNMuAUFh2P9vw
```
#### Notes
- Replace all values to **URI_DB, URI_REDIS, URI_WS_REDIS, JWT_SECRET**

### Scripts


#### start

```bash
yarn start
```

#### build

```bash
yarn build
```
**output:** dist
