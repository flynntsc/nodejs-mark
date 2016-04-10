import http from 'http';
import url from 'url';

function server(routeFn, handle) {
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");

    function onRequest(req, res) {
        const pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received`);
        routeFn(handle, pathname, res);
    }
}


export
default server;