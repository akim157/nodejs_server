const fs = require('fs');

//fs.ReadStream наследует от stream.Readable
//создаем поток
//поток - это объект, который получает информацию а ресурск (в данном случае к файлу)
//и который умеет с этим ресурсом работать.


const stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});
const stream = new OurStream('');

stream.on('readable', function() {
    const data = stream.read();
    // console.log(data.toString()); //перобразования потока в строку utf-8
    console.log(data);
});

stream.on('end', function() {
    console.log('THE END');
});

stream.on('error', function(err) {
    if (err.code ==='ENOENT') {
        console.log('Файл не найден, попинайте админа, пусть выложит...');
    } else {
        console.error(err);
    }
});