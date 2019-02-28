
const mimeHtml = 'text/html';
const mimeJson = 'application/json';
const extMimes = {
    '.html': mimeHtml,
    '.htm': mimeHtml,
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': mimeJson,
    '': mimeJson,
    '.ico': 'image/x-icon'
}

module.exports = { extMimes }