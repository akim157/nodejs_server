const http = require('http');
const fs = require('fs'); //работа с файловой системой

http.createServer(function(req, res) {
    let info;

    if (req.url === '/') {
        // info = fs.readFileSync('index.html'); //считывается файл html
        /*асинхронный вызыв функции*/
        fs.readFile('index.html', function(err, info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('На сервере произошла ошибка!');
                return;
            }
            res.end(info);
        });
        // res.end(info); //выводится пользователю
    } else if (req.url === '/now') {
        res.end(new Date().toString());
    } else {
        /* 404 */
    }
}).listen(3000);