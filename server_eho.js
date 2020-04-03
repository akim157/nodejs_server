// http://127.0.0.1/echo?message=Hello -> Hello

const http = require('http');
const url = require('url');

const server = new http.Server(function(req, res) {
    // console.log(req.headers);
    // console.log(req.method, req.url);
    const urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.statusCode = 200;
        // res.writeHead(200, 'OK', {'Cache-control': 'no-cache'}); //заголовки пишуться тутже
        res.setHeader('Cache-control', 'no-cache'); //результаты ответа сервера не будут кэшироваться
        res.end( urlParsed.query.message);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
    // res.end();
});





server.listen(1337, '127.0.0.1');