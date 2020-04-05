const domain = require('domain');

const d = domain.create();

d.on('error', function(err) {
    console.error("Домен перехватил %s", err);
});

d.run(function() {
    //d.enter(); -> process.domain1
    setTimeout(function () {
        fs.readFile(__filename, function() {
            ERROR();
        });
    }, 1000);
    //d.exit();
});