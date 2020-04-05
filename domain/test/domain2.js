const domain = require('domain');
const fs = require('fs'), http = require('http');

let d = domain.create(), server;

d.on('error', function(err) {
    console.log('Домен перехватил %s', err);
});

server = new http.Server();

d.run(function() {
    //d.enter(); -> process.domain
    // server = new http.Server(); //EventEmmit получает ссылку на текущей домен
    d.add(server); // двухстороняя ссылка и домен ссылается на server
    d.remove(server); //удаляет ссылки на домен
    //d.exit();
});

server.on('boom', function() {
    setTimeout(function () {
        fs.readFile(__filename, function() {
            ERROR();
        });
    },  1000);
});
server.emit('boom');