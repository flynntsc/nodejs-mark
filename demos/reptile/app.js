const eventproxy = require('eventproxy');
const superagent = require('superagent');
const cheerio = require('cheerio');
const url = require('url');
const ep = new eventproxy();
const cnodeUrl = 'https://cnodejs.org/';
const maxNum = 5; // 以免太多对人家造成不良影响

superagent.get(cnodeUrl)
    .end(function(err, res) {
        if (err) {
            return console.error(err);
        }
        const topicUrls = [],
            $ = cheerio.load(res.text);
        // 迭代出url数组
        $('#topic_list .topic_title').each(url2Arr);
        // 注册每条url所要获取的评论
        ep.after('topic_html', topicUrls.length, eqGetData);
        // 遍历触发
        topicUrls.forEach(doEpEmit);

        // Fn
        function url2Arr(idx, element) {
            if (idx >= maxNum) {
                return;
            }
            const $element = $(element);
            const href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push(href);
        }

        function eqGetData(topics) {
            topics = topics.map(function(topicPair) {
                const topicUrl = topicPair[0];
                const topicHtml = topicPair[1];
                const $ = cheerio.load(topicHtml);
                return ({
                    title: $('.topic_full_title').text().trim(),
                    href: topicUrl,
                    comment1: $('.reply_content').eq(0).text().trim(),
                });
            });

            console.log('final:');
            console.log(topics);
        }

        function doEpEmit(topicUrl) {
            superagent.get(topicUrl)
                .end(function(err, res) {
                    console.log('fetch ' + topicUrl + ' successful');
                    ep.emit('topic_html', [topicUrl, res.text]);
                });
        }
    });