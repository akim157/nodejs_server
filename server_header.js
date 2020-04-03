const http = require('http');
const url = require('url');

const server = new http.Server(function(req, res) {
    console.log(req.headers);
});

server.listen(1337, '127.0.0.1');