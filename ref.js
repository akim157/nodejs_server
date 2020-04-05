const http = require('http');

const server = new http.Server(function() {

}).listen(3000);

let timer = setInterval(function() {
    console.log(process.memoryUsage());
}, 1000);

timer.unref(); //игнорируется в процессах
timer.ref(); //отменяет unref

setTimeout(function() {
    // server.close(function() {
    //     process.exit();
    // });
    // server.close(function() {
    //     clearInterval(timer);
    // });
    server.close();
}, 2500);