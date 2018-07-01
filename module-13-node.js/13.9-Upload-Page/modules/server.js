var http = require('http'),
    colors = require('colors'),
    handlers = require('./handlers');

function start () {
    function onRequest(req, res) {
        console.log('Request received.');
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        switch (req.url) {
            case '/':
            case '/home':
                handlers.welcome (req, res);
                break; 
            case '/upload':
                handlers.upload (req, res);
                break;
            case '/show':
                handlers.show(req, res);
                break; 
            default:
                if (req.url.length > 1) {
                    handlers.file(req, res);
                } else {
                    handlers.error (req, res);
                }
        }
    }
    http.createServer(onRequest).listen(9000);

    console.log('Server on.'.green);
}

exports.start = start;