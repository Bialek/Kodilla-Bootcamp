var express = require('express');
var app = express();

app.get('/', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony głownej');
    res.send('Hello get');
});

app.post('/', (req, res) => {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('hello POST!');
});

app.delete('/del_user', (req, res) => {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('hello DELETE!');
});

app.get('/list_user', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});

app.get('/ab*cd', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});

// app.get('/:id', (req, res) => {
//     res.send('Identyfikator, który został dopisany to ' + req.params.id);
// });

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

app.use(function (req, res, next) {
    res.status(400).send('400')
});

app.listen(3000);