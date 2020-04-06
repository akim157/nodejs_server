// node server.js port=3000
// node server.js --port=3000
// supervise -- server.js --port=3000
// NODE_ENV=production (режим боевого сервера)
console.log(process.env.HOME); //выводит домашнюю директорию
const http = require('http');

// console.log(process.argv);
const opts = require('optimist').argv;

http.createServer(function(req, res) {
    if (process.env.NODE_ENV == 'production') {
        //оптимизация
    } else if (process.env.NODE_ENV == 'development') {
        //дополнительный отдадочный вывод
    }
    res.end('The server is running!');
}).listen(opts.port);