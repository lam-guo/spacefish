# spacefish

## Description

coc_api_nodejs

## Installation

```bash
$ npm install
```
## config
config the config/index, set up your coc api token

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 接口文档

### 部落相关

#### 查询部落
* 路由：'api/clans'
* 参数： query

|参数名|意义|类型|
|--|:--|:--|:--|
|name|部落名|string|
|warFrequency|战争频率|string|
|minMembers|最少部落成员数|int|
|locationId|地理id|int|
|maxMembers|最大部落成员数|int|
|minClanPoints|最低部落分|int|
|minClanLevel|最低部落等级|int|
|limit|限制返回数量|int|

---
#### 根据部落Tag查询部落详情
* 路由: 'api/clans/tag/{tag}'
* 参数： param

|参数名|意义|类型|备注|
|--|:--|:--|:--|:--|
|tag|部落tag|string|不要带#号|

---

#### 根据部落Tag查询部落成员
* 路由: 'api/clans/tag/{tag}/members'
* 参数： param

|参数名|意义|类型|备注|
|--|:--|:--|:--|:--|
|tag|部落tag|string|不要带#号|
