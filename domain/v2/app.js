const domain = require('domain');
const serverDomain = domain.create();

let server;

serverDomain.on('error', function(err) {
    console.error('Server error %s', err);
    if (server) server.close();

    setTimeout(function () {
        process.exit(1);
    }, 1000).unref();
});

serverDomain.run(function () {
    const http = require('http');
    const handler = require('./handler');
    //const database = requrie('mongodb');

    server = http.createServer(function(req, res) {
        const reqDomain = domain.create();
        reqDomain.add(req);
        reqDomain.add(res);

        reqDomain.on('error', function(err) {
            res.statusCode = 500;
            res.end('Sorry, ' + err);
            //...
            serverDomain.emit('error', err);
        });

        reqDomain.run(function() {
            handler(raq, res);
        });
    });

    server.listen(3000);
});