const http = require('http');
const fs = require('fs');

function handler(req, res) {
    if (req.url == '/') {
        fs.readFile('index.html', function(err, content) {
            if (err) throw err; //JSON.parse('invalid');
            res.end(content);
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
}

const server = new http.createServer(handler);
module.exports = server;