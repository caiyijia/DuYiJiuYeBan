let fs = require('fs');

function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err,data) => {
            if(data) {
                res(data)
            }
        })
    })
}

readFile('./data/number.txt').then((data) => {
    return readFile(data);
}).then((data) => {
    return readFile(data);
}).then((data) => {
    console.log(data)
})