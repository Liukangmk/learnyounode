const http = require('http');

let index = 2;

function sendReq (url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            
            let data = '';
            res.setEncoding('utf8');
            
            res.on('data', (d) => {
                data += d;
            });

            res.on('end', () => {
                resolve(data)
            });

            res.on('error', (e) => {
                console.error(e);
            });


        }).on('error', (e) => {
            console.error(e);
        })
    })
}

let a = process.argv;

async function sendRequest () {
    let data = [];
    data[0] = await sendReq(a[index++]);
    data[1] = await sendReq(a[index++]);
    data[2] = await sendReq(a[index]);
    data.forEach(e => console.log(e));
}

sendRequest();

/* const http = require('http');



//USE ASYNC/AWAIT YOU NOOB

let index = 2;

function sendReq (url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            
            let data = '';
            res.setEncoding('utf8');
            
            res.on('data', (d) => {
                data += d;
            });

            res.on('end', () => {
                console.log(data);
                resolve('');
            });

            res.on('error', (e) => {
                console.error(e);
            });


        }).on('error', (e) => {
            console.error(e);
        })
    })
}

let a = process.argv;

async function sendRequest () {
    await sendReq(a[index++]);
    await sendReq(a[index++]);
    await sendReq(a[index]);
}

sendRequest(); */