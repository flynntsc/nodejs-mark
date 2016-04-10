import server from './server.js';
import route from './router.js';
import reqHand from './requestHandlers.js';

const handle = {};
handle['/'] = reqHand.start;
handle['/start'] = reqHand.start;
handle['/upload'] = reqHand.upload;

server(route, handle);