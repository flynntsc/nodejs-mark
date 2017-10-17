# NPM

- `npm cmd [option]`
- `npm -h`
 - `npm help cmd` 查看某个命令详细介绍，如`npm help install/update...`
 - `npm cmd -h` 快速查看可搭配属性
- `npm init`
 - `npm init -y` 直接新建默认package.json文件
- `npm install/uninstall [-global/-g/--save/-S/-dev/-D]`
 - `npm i -f/--force` 强制重新安装-可解决node-sass问题
 - `npm i/un []`
 - `npm i name@1.8.2`
 - `npm i mygulp`(package.json.name) VS `npm i` = 生产 VS 生产+开发
- `npm update`
 - `npm info/view/v react` 超多版本详细信息
 - `npm dist-tags ls react` 版本更新简洁近况
 - `npm outdated` 检测当前安装npm包是否有更新
- `npm publish` 发布
 - x.y.z 版本号
 - `npm version <update_type>` 更新版本号

```
npm version patch => z+1
npm version minor => y+1 && z=0
npm version major => x+1 && y=0 && z=0
```

- `npm list -g --depth=0`

 - --depth=0 控制路径深度

- `npm dedupe` 整理包依赖
- `ls ~/.npm` 查看缓存区
 - `npm cache clean` 删除

- `npm prune`
 - 会拿出这些 package，并移除那些没有手动加到 package.json 中或没有使用 --save 标志安装的 package

# npm VS yarn

| NPM | YARN |
| ------ | ------ |
| `npm install` | `yarn install` |
| (N/A) | `yarn install` |
| (N/A) | `yarn install --flat` |
| (N/A) | `yarn install --har` |
| (N/A) | `yarn install --no-lockfile` |
| (N/A) | `yarn install --pure-lockfile` |
| `npm install [package]` | (N/A) |
| `npm install --save [package]` | `yarn add [package]` |
| `npm install --save-dev [package]` | `yarn add [package] [--dev/-D]` |
| (N/A) | `yarn add [package] [--peer/-P]` |
| `npm install --save-optional [package]` | `yarn add [package] [--optional/-O]` |
| `npm install --save-exact [package]` | `yarn add [package] [--exact/-E]` |
| (N/A) | `yarn add [package] [--tilde/-T]` |
| `npm install --global [package]` | `yarn global add [package]` |
| `npm update --global` | `yarn global upgrade` |
| `npm rebuild` | `yarn install --force` |
| `npm uninstall [package]` | (N/A) |
| `npm uninstall --save [package]` | `yarn remove [package]` |
| `npm uninstall --save-dev [package]` | `yarn remove [package]` |
| `npm uninstall --save-optional [package]` | `yarn remove [package]` |
| `npm cache clean` | `yarn cache clean [package]` |
| `rm -rf node_modules && npm install` | `yarn upgrade` |

# Mark

- [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs)  node.js安装包与资料收集
- [中文社区](https://cnodejs.org/)
- [nodeschool](http://nodeschool.io/zh-cn/)
- [中文API](http://nodeapi.ucdok.com/api/)
- [新手入门](http://www.nodebeginner.org/index-zh-cn.html)


# Package

- [express](https://www.npmjs.com/package/express)
- [cheerio](https://github.com/cheeriojs/cheerio) nodejs中的jQuery
- [axios](https://github.com/mzabriskie/axios) http请求库（类似ajax,fetch）
- [utility](https://github.com/node-modules/utility) 实用工具，如MD5、编码、数据过滤/转换等
- [superagent](https://github.com/visionmedia/superagent) http方面的库，可以发起 get 或 post 请求
- [eventproxy](https://www.npmjs.com/package/eventproxy) 事件封装良好的库
- [async](https://github.com/caolan/async) 队列+控制并发+函数式编程
- [mocha](http://mochajs.org/) 测试框架
- [should](https://github.com/tj/should.js) 断言库
- [istanbul](https://github.com/gotwarlost/istanbul) 测试率覆盖工具
- [chai](http://chaijs.com/) 全栈的断言库
- [supertest](https://github.com/tj/supertest) 专门用来配合 express进行集成测试
- [nodemon](https://github.com/remy/nodemon) 调式使用，可自动重启应用
- [request](https://github.com/request/request) 简易http请求客户端
- [node-inspector](https://github.com/node-inspector/node-inspector) node调试开发工具
- [bluebird](https://github.com/petkaantonov/bluebird) Promise库，性能优于目前原生
- [through2](https://github.com/rvagg/through2) Tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise
- [del](https://github.com/sindresorhus/del) 封装[rimraf](https://github.com/isaacs/rimraf)的删除文件模块
- [mkdirp](https://github.com/substack/node-mkdirp) 可深度创建fs模块
- [sha1](https://github.com/pvorb/node-sha1) 密码加密 - 简单快速不够安全
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) 密码加密 - 更成熟可靠
- [scrypt](https://github.com/barrysteyn/node-scrypt) 密码加密 - 更新更有潜力
- [validator](https://github.com/chriso/validator.js) 丰富的字符串校验


# Tips

```
console.dir(data, {depth: null}) // 打印查看
```

```
node --harmony-async-await ***.js
```


# Demos
- [新手入门代码实例](demos/start)
- [基础小爬虫](demos/reptile)
- [async控制并发](demos/async)
