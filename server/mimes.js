
const mimeHtml = 'text/html';
const mimeJson = 'application/json';
const extMimes = {
    '.html': mimeHtml,
    '.htm': mimeHtml,
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': mimeJson,
    '': mimeJson,
    '.ico': 'image/x-icon',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.png': 'image/png'
}

const extLetter = {
    '.html': 'H',
    '.htm': 'H',
    '.css': 'C',
    '.js': 'J',
    '.json': 'O',
    '': ' ',
    '.ico': 'I',
    '.jpg': 'I',
    '.jpeg': 'I',
    '.gif': 'I',
    '.png': 'I'
}

module.exports = { extMimes, extLetter }