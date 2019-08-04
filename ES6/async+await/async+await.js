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

// function promisify (func) {
//     return function (...arg) {
//         return new Promise((res, rej) => {
//             func(...arg, (err,data) => {
//                 if(err) {
//                     rej(err)
//                 }else {
//                     res(data);
//                 }
//             })
//         })
//     }
// }

// // promise化异步操作
// let readFile = promisify(fs.readFile);
// let writeFile = promisify(fs.writeFile);
// let readDir = promisify(fs.readDir);

// readFile('../babel/data/number.txt', 'utf-8').then(val=> console.log(val), rs => {})

// function promisifyAll(obj) {
//     for(let key in obj) {
//         let fn = obj[key];
//         if(typeof fn === 'function') {
//             obj[key + 'Async'] = promisify(fn);
//         }
//     }

// }
// promisifyAll(fs)
// fs.readFile => readFileAsync; fs.writeFile => writeFileAsync

// fs.readFileAsync('../babel/data/number.txt', 'utf-8').then(val=> console.log(99, val), rs => {})

// let bluebird = require('bluebird');
// bluebird.promisify(fs.readFile)

function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                rej(err)
            } else {
                res(data)
            }
        })
    })
}

// readFile('../babel/data/number.txt').then(val => {}, rs =>{})

// function* read(url) {
//     let val1 = yield readFile(url);
//     let val2 = yield readFile(val1);
//     let val3 = yield readFile(val2);
//     return val3
// }
// function Co(oIt) {
//     return new Promise((res, rej) => {
//         let next = (data) => {
//             let {value, done} = oIt.next(data);
//             if (done) {
//                 res(value);
//             }else {
//                 return value.then((val) => {
//                     next(val)
//                 }, rej)
//             }
//         }
//         next();
//     })
// }
// Co(read('../babel/data/number.txt')).then(val => {
//     console.log(val)
// }, rs => { console.log(rs)
// })

async function read(url) {
    try {
        let val1 = await readFile(url);
        let val2 = await readFile(val1);
        let val3 = await readFile(val2);
        return val3
    } catch (e) {
        console.log(111, e)
    }

}
read('../babel/data/number1.txt').then(val => console.log(val), rs => {
    console.log(rs)
})