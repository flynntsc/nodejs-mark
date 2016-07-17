// 根据不同文件后缀，可用电脑IP访问文件
// 可供访问的静态服务器

const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const os = require('os')

// const
const mime = {
    'html': 'text/html',
    'htm': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'xml': 'text/xml',
    'json': 'application/json',

    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'bmp': 'image/bmp',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',

    'mp3': 'audio/mpeg',
    'wav': 'audio/x-wav',
    'mp4': 'video/mp4',
    'swf': 'application/x-shockwave-flash',

    'woff': 'application/x-font-woff',
}

// Server
let server = http.createServer((req, res) => {
    // 处理请求文件路径-简单的路由
    let filename = __dirname + url.parse(req.url).pathname
    let extname = path.extname(filename)
    extname = extname ? extname.slice(1) : 'unknown'
    let resContentType = mime[extname] || 'text/plain'

    fs.exists(filename, exists => {
        //文件不存在返回404
        if(!exists) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.write('404 Not Found')
            res.end()
            return
        }

        //文件存在读取并返回
        fs.readFile(filename, (err, data) => {
            if(err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                res.end(err)
                return
            }
            res.writeHead(200, { 'Content-Type': resContentType })
            res.write(data)
            res.end()
        })
    })
}).listen('8080', function () {
    console.log(`Server start on ${getIPv4()} 8080`)
})

// 获取IP
function getIPv4() {
    let interfaces = os.networkInterfaces(); //获取网络接口列表
    let ipv4s = []; //同一接口可能有不止一个IP4v地址，所以用数组存

    Object.keys(interfaces).forEach(key => {
        interfaces[key].forEach(item => {

            //跳过IPv6 和 '127.0.0.1'
            if('IPv4' !== item.family || item.internal !== false) return;

            ipv4s.push(item.address); //可用的ipv4s加入数组
            console.log(key + '--' + item.address);
        })
    })

    return ipv4s[0]; //返回一个可用的即可
}
