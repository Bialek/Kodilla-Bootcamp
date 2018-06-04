var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
})

var server = app.listen(3000, () => {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});