let fs = require('fs');

let oStudent = {};

function readFile(path) {
    if (!path || path == 'undefined') return;
    console.log(path)
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (data) {
                res(data)
            }
        })
    })
}

// promise对象
Promise.all([readFile('./data/number.txt'), readFile('./data/name.txt'), readFile('./data/score.txt')]).then((val) => {
    console.log(val)
})
// readFile('./data/number.txt').then((data) => {
//     return readFile(data);
// }).then((data) => {
//     return readFile(data);
// }).then((data) => {
//     console.log(data)
// })