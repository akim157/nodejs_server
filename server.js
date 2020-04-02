const http = require('http');

const server = new http.Server(); //EventEmitter
//http.Server -> net.Server -> EventEmitter
//вызов сервера server.emit

server.listen(1337, '127.0.0.1');

//req - info from browser
//res - object answer
let counter = 0;

const emit = server.emit;

server.emit = function(event) {
    console.log(event);
    emit.apply(server, arguments);
};

server.on('request', function(req, res) {
    res.end('Hello, world! ' + ++counter);
});

//запустившись и считав файл модуля, создается объект module и этим объект пользуется
//идет два запроса, при одном обнавлении страницы, второй для favicon.ico