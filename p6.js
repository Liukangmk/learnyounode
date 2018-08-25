const myModule = require('./p6module');

let callback = (err, dir) => {
    if (err) {
        return console.log(err);
    }
    dir.forEach((fileName) => {
        console.log(fileName);
    });
}

myModule(process.argv[2], process.argv[3], callback);