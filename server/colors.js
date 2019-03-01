
const escColor = (code) => {
    return '\x1b[' + code.toString() + 'm';
}
const colorReset = '\x1b[0m';
const fgColors = {
    '.css': escColor(30),       // 0 Black
    '.ico': escColor(30 + 7),   // 7 White
    '.gif': escColor(30 + 7),   // 7 White
    '.jpg': escColor(30 + 7),   // 7 White
    '.jpeg': escColor(30 + 7),  // 7 White
    '.png': escColor(30 + 7),   // 7 White
    '.html': escColor(30),      // 0 Black
    '.htm': escColor(30),       // 0 Black
    '.js': escColor(30),        // 0 Black
    '.json': escColor(30)       // 0 Black
};
const bgColors = {
    '.css': escColor(40 + 2),   // 2 Green
    '.ico': escColor(40 + 3),   // 3 Yellow
    '.gif': escColor(40 + 3),   // 3 Yellow
    '.jpg': escColor(40 + 3),   // 3 Yellow
    '.jpeg': escColor(40 + 3),  // 3 Yellow
    '.png': escColor(40 + 3),   // 3 Yellow
    '.html': escColor(40 + 7),  // 7 White
    '.htm': escColor(40 + 7),   // 7 White
    '.js': escColor(40 + 1),    // 1 Red
    '.json': escColor(40 + 6)   // Cyan
};

module.exports = { fgColors, bgColors, colorReset }