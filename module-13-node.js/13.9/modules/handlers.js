var fs = require('fs'),
    colors = require('colors'),
    formidable = require('formidable');

exports.upload = (req, res) => {
    console.log('Start upload request');
    var form = new formidable.IncomingForm();
    form.parse(req, (error, fields, files) => {
        var name = fields.title;
        fs.renameSync(files.upload.path, fields.title + '.png');
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.write('received image:<br/>');
        res.write("<img src='/show' />");
        exports.show = (req, res,) => {
            fs.readFile(fields.title + '.png', "binary", (error, file) => {
                res.writeHead(200, {"Content-Type": "image/png"});
                res.write(file, "binary");
                res.end();
            });
        }
        res.end();
    });
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
    console.log('404 not found.'.red);
    res.write('404 :(');
    res.end();
}