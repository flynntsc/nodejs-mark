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

# NPM & YARN

```
npm install === yarn
npm install taco --save === yarn add taco
npm uninstall taco --save === yarn remove taco
npm install taco --save-dev === yarn add taco --dev
npm update --save === yarn upgrade
npm install taco@latest --save === yarn add taco
npm install taco --global === yarn global add taco
```

# Mark

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
- [bluebird](https://github.com/petkaantonov/bluebird) Promise库
- [through2](https://github.com/rvagg/through2) Tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise
- [rimraf](https://github.com/isaacs/rimraf) 可深度删除fs模块
- [mkdirp](https://github.com/substack/node-mkdirp) 可深度创建fs模块


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
