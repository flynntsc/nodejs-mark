var async = require('async');

var concurrencyCount = 0;
var fetchUrl = function(url, callback) {
    var delay = parseInt((Math.random() * 100000000) % 2000, 10);
    concurrencyCount++;
    console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
    setTimeout(function() {
        concurrencyCount--;
        callback(null, url + ' html content');
    }, delay);
};

// 自建url数组
// var urls = '​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​'.split('').map(function (v, i) { return i; });
var urls = Array(30).fill('1').map(function (v, i) {
    return 'http://datasource_' + i;
});

async.mapLimit(urls, 5, function(url, callback) {
    fetchUrl(url, callback);
}, function(err, result) {
    console.log('final:');
    console.log(result);
});
