import server from './server.js';
import route from './router.js';
import {
    start, upload, show
}
from './requestHandlers.js';

const handle = {};
handle['/'] = start;
handle['/start'] = start;
handle['/upload'] = upload;
handle['/show'] = show;

server(route, handle);