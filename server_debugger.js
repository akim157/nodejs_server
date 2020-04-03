const http = require('http');
const url = require('url');

const server = http.createServer();

server.on('request', function(req, res) {
    const urlParsed = url.parse(req.url, true);
    debugger;

    if (req.method == 'GET' &&
        urlParsed.pathname == '/echo' &&
        urlParsed.query.message) {
        res.end(urlParsed.query.message);
        return;
    }

    res.statusCode = 404;
    res.end('Not Found');
});

server.listen(1337);
console.log('Server is running');