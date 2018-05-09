exports.upload = function(req, res) {
    console.log('Rozpoczynam obsługe żądania upload.');
    res.write('Rozpoczynam upload.');
    res.end();
}

exports.welcome = function(req, res) {
    console.log('Rozpoczynam obsługę żądania welcome.');
    res.write('Witaj na stronie startowej!');
    res.end();
} 

exports.error = function(req, res) {
    console.log('Nie wiem co robić.');
    res.write('404 :(');
    res.end();
}