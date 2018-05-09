var http = require('http'),
    colors = require('colors'),
    handlers = require('./handlers');

function start () {
    function onRequest(req, res) {
        console.log('Odebrano zapytanie.');
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        switch (req.url) {
            case '/':
            case '/home':
            handlers.welcome (req, res);
            break;
            case '/upload':
            handlers.upload (req, res);
            break;
            default:
                handlers.error (req, res);
        }
    }
    http.createServer(onRequest).listen(9000);

    console.log('Uruchomiono serwer.'.green);
}

exports.start = start;