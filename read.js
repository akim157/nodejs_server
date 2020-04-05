const fs = require('fs');

fs.readFile(__filename, {encoding: 'UTF-8'}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});

fs.writeFile('file.tmp', 'data', function(err) {
    if (err) throw err;

    fs.rename('file.tmp', 'new.tmp', function(err) {
        if (err) throw err;
        fs.unlink('new.tmp', function(err) {
            if (err) throw err;
        });
    });
});