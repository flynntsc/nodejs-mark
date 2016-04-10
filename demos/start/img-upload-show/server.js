import http from 'http';
import url from "url";

// function server(routeFn, handle) {
//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started.");

//     function onRequest(req, res) {
//         const pathname = url.parse(req.url).pathname;
//         let postData = '';

//         console.log(`Request for ${pathname} received`);

//         req.setEncoding('utf8');

//         req.addListener('data', (postDataChunk) => {
//             postData += postDataChunk;
//             console.log("Received POST data chunk '" + postDataChunk + "'.")
//         });
//         req.addListener('end', () => routeFn(handle, pathname, res, postData));
//     }
// }

function server(routeFn, handle) {
    http.createServer(onRequest).listen(8888);
    console.log(`Server has started.`);

    function onRequest(req, res) {
        const pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received`);
        routeFn(handle, pathname, res, req);
    }
}


export
default server;