const http = require('http');
const fs = require('fs');

new http.Server(function(req, res) {
    //res instanceof http.ServerResponse < stream.Writable
    if (req.url == '/big.html') {
        //если content большой, то он зависнит в памяти до того как клиент его получить.
        // fs.readFile('big.html', function(err, content) {
        //     if (err) {
        //         res.statusCode = 500;
        //         res.end('Server error');
        //     } else {
        //         res.setHeader('Content-type', 'text/html; charset=utf-8');
        //         res.end(content);
        //     }
        // });
        const file = new fs.ReadStream('big.html');
        sendFile(file, res);
    }
}).listen(3000);

function sendFile(file, res) {
    // file.on('readable', write);
    // function write() {
    //     const fileContent = file.read();
    //     if (fileContent && !res.write(fileContent)) {
    //         file.removeListener('readable', write);
    //         res.once('drain', function() {
    //             file.on('readable', write);
    //             write();
    //         });
    //     }
    // }
    file.pipe(res);
    file.pipe(process.stdout);

    file.on('error', function(err) {
        res.statusCode = 500;
        res.end('Server Error');
        console.error(err);
    });

    file.on('open', function() {
        console.log('open');
    }).on('close', function() {
        console.log('close');
    });


    res.on('close', function() {
        file.destroy();
    });
}