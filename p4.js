const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function countNewLine (err, content) {
    console.log(content.split('\n').length - 1);
});