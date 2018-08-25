const fs = require('fs');
const PATH = require('path');

module.exports = function (path, ext, callback) {
    ext = `.${ext}`;
    fs.readdir(path, function (err, dir) {
        if (err) {
            return callback(err);
        }
        if (!dir.length) {
            console.log('Please enter a valid directory.');
        }
        dir = dir.filter(fileName => PATH.extname(fileName) === ext);
        callback(null, dir);
    });
};
