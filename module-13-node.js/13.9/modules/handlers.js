var fs = require('fs'),
    colors = require('colors');

exports.upload = (req, res) => {
    console.log('Rozpoczynam obsługe żądania upload.');
    res.write('Rozpoczynam upload.');
    res.end();
}

exports.welcome = (req, res) => {
    console.log("Start welcome request");
    fs.readFile('template/home.html', (err, html) => {
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.write(html);
        res.end();
    });
}

exports.error = (req, res) => {
    console.log('Nie wiem co robić.'.red);
    res.write('404 :(');
    res.end();
}