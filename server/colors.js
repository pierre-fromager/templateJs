
const escColor = (code) => {
    return '\x1b[' + code.toString() + 'm';
}
const colorReset = '\x1b[0m';
const fgColors = {
    '.css': escColor(30 + 2),     // 2 Green
    '.ico': escColor(30 + 7),    // 7 White
    '.html': escColor(30 + 7),    // 7 White
    '.htm': escColor(30 + 7),     // 7 White
    '.js': escColor(30 + 1),      // 1 Red
    '.json': escColor(30 + 6)     // 6 Cyan
};
const bgColors = {
    '.css': escColor(40 + 2),
    '.ico': escColor(40 + 2),
    '.html': escColor(40 + 7),
    '.htm': escColor(40 + 7),
    '.js': escColor(40 + 1),
    '.json': escColor(40 + 6)
};

module.exports = { fgColors, bgColors, colorReset }