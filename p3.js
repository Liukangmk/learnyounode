let fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]);
let content = buffer.toString();
console.log(content.split('\n').length - 1);