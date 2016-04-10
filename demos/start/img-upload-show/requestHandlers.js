import formidable from 'formidable';
// import querystring from 'querystring';
import fs from 'fs';

function start(res) {
    console.log("Request handler 'start' was called.");

    const html = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" ' +
        'method="post">' +
        '<input type="file" name="upload" multiple="multiple">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end(html);
};

function upload(res, req) {
    console.log("Request handler 'upload' was called.");

    const form = new formidable.IncomingForm();
    // form.uploadDir = 'upload';

    console.log(`about to parse`);
    console.dir(form.parse);

    form.parse(req, renameFn);

    function renameFn(err, fields, files) {
        console.log(`parsing done`);
        console.dir(files);

        fs.renameSync(files.upload.path, '/tmp/test.png');
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(`received image:<br><img src='/show'>`);
    }
}

function show(res) {
    console.log(`Request handler 'show' was called.`);
    fs.readFile('/tmp/test.png', 'binary', readFileFn);

    function readFileFn(err, file) {
        if (err) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });
            res.end(`${err} \n`);
        } else {
            res.writeHead(200, {
                "Content-Type": "image/png"
            });
            res.write(file, "binary");
        }
    }
}

export {
    start, upload, show
}