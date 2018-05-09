var http = require('http'),
    colors = require('colors');

function start () {
    function onRequest(req, res) {
        console.log('Odebrano zapytanie.');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('ierwsze koty za płoty');
        res.end();
    }

    http.createServer(onRequest).listen(9000);

    console.log('Uruchomiono serwer.'.green);
}

exports.start = start;