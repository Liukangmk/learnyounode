const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    const readStream = fs.createReadStream(process.argv[3], { encoding: 'utf8' } );
    response.on('error', e => console.error);
    readStream.pipe(response);
    
});

server.listen(process.argv[2]);
