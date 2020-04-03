const http = require('http');
const debug = require('debug');

const server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

// console.log('Server is running');
debug('Server is running');