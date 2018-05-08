var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(request, response) {
    response.setHeader('Content-type', 'text/html; charset = utf-8');
    if (request.method === 'GET' && request.url === '/home') {
        fs.readFile('./index.html', function(err, data) {
            response.write(data);
            response.end;
        });    
    } else {
        response.statusCode = 404;
        response.write('<img src="https://http.cat/404" alt="404">');
        response.end;
    }
});

server.listen(8000);
