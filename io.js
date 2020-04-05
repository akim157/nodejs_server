const fs = require('fs');

fs.open(__filename, 'r', function(err, file) {
    console.log('IO!');
});

setImmediate(function() {
    console.log('immediate');
});

process.nextTick(function() {
    console.log('nextTick');
});

/*
* nextTick - по окончания текущему js, но до любых событий ввода/вывода (до открытия файла)
* IO!
* immediate
* */