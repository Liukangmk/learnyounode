const fs = require('fs');
const mainpath = require('path');

function filter(path, ext) {
    ext = `.${ext}`;
    fs.readdir(path, function filter(err, dir) {
        if (!dir.length) {
            console.log('Please enter a valid directory.');
        }
        for (let a = 0; a < dir.length; a++) {
            if (mainpath.extname(dir[a]) == ext) {
                console.log(dir[a]);
            }
        }
    });
}

filter(process.argv[2], process.argv[3]);
