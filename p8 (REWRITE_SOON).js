const http = require('http');

USE SOME NPM MODULE

http.get(process.argv[2], (res) => {

    let data = '';
    let noOfChar = 0;

    res.on('data', (chunk) => {
        data += chunk;
        noOfChar += chunk.length;
    });

    res.on('end', () => {
        console.log(noOfChar);
        console.log(data);
    })

    res.on('error', console.error);

    res.setEncoding('utf8');

}).on('error', console.error);