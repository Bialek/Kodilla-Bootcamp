var fs = require('fs'),
    StatMode = require('stat-mode'),
    colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem.'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.green);
    });
    fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
        console.log('Dane po zapisaniu'.blue);
        console.log(data);
        fs.readdir('.', 'utf-8', function(err, data) {
            console.log(data);
            fs.writeFile('./dir.txt', data, 'utf-8', (err) => {
                if (err) throw err;
                console.log('Zapisano.'.green);    
            });
        });
    });
});

