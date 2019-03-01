const http = require('http');
const fs = require('fs');
const path = require('path');
const Config = require('./config');
const Colors = require('./colors');
const Mimes = require('./mimes');
const Headers = require('./headers');

http.createServer((request, response) => {
    let filePath = '.' + request.url;
    if (filePath == './')
        filePath = Config.defaultFile;
    const extname = path.extname(filePath);
    const contentType = Mimes.extMimes[extname];
    process.stdout.write(`${Colors.bgColors[extname]}${Colors.fgColors[extname]}${Mimes.extLetter[extname]}${Colors.colorReset}`);
    fs.readFile(Config.basePath + filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                response.writeHead(404, Headers.payload(contentType));
                response.end('File not found ' + filePath, Config.charset);
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                response.end();
            }
        }
        else {
            Headers.dispatch(response);
            response.writeHead(200, Headers.payload(contentType));
            response.end(content, Config.charset);
        }
    });
}).listen(Config.httpPort, Config.httpAddress);
process.stdout.write(`Server running at http://${Config.httpAddress}:${Config.httpPort}\n`);