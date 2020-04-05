const http = require('http');

http.createServer(function(req, res) {
    setTimeout(function() {
        //сработает до следующего запроса или после?
    }, 0);
    process.nextTick(function() {
        req.on('readable', function() {
            //должен сработать на ближащих данных
        });
    }); //асинхронно, но ожидает ответа
    let part = 0;
    setImmediate(function run() {
        heavyCalc(part++);
        if (notFinished) setImmediate(run);
    }); //асинхронность
}).listen(1337);