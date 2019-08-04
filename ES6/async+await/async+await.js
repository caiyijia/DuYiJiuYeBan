let fs = require('fs');
// error-first
// fs.readDir fs.writeFile 异步方法
// node单线程

// fs.readFile('../babel/data/number.txt', 'utf-8', (err, data) => {
//     fs.readFile(data, 'utf-8', (err, data) => {
//         fs.readFile()
//     })
// })

// Promise化
// function readFile() {
//     return new Promise((res, rej) => {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if(err) {
//                 rej(err)
//             }else {
//                 res(data)
//             }
//         })
//     })
// }

// readFile('../babel/data/number.txt').then(val => {}, rs =>{})

// function writeFile() {
//     return new Promise((res, rej) => {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if(err) {
//                 rej(err)
//             }else {
//                 res(data)
//             }
//         })
//     })
// }

function promisify (func) {
    return function (...arg) {
        return new Promise((res, rej) => {
            func(...arg, (err,data) => {
                if(err) {
                    rej(err)
                }else {
                    res(data);
                }
            })
        })
    }
}

// promise化异步操作
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);
let readDir = promisify(fs.readDir);

// readFile('../babel/data/number.txt', 'utf-8').then(val=> console.log(val), rs => {})

function promisifyAll(obj) {
    for(let key in obj) {
        let fn = obj[key];
        if(typeof fn === 'function') {
            obj[key + 'Async'] = promisify(fn);
        }
    }

}
promisifyAll(fs)
// fs.readFile => readFileAsync; fs.writeFile => writeFileAsync

fs.readFileAsync('../babel/data/number.txt', 'utf-8').then(val=> console.log(99, val), rs => {})

// let bluebird = require('bluebird');
// bluebird.promisify(fs.readFile)