
var express = require('express');
var app = express();

app.use((req, res, next) => {
    console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', (req, res) => {     
    res.send('To jest sklep');
});

var server = app.listen(3000, 'localhost', () => {
    var host = server.address().address,
        port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});