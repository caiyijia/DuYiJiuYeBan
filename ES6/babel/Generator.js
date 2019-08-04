// function *test() {
//     yield 'a';
//     console.log(1)
//     yield 'b';
//     console.log(2)

//     yield 'c';
//     console.log(3)

//     return 'd';
// }

// let oG = test()

// oG.next()
// let obj = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3,
//     [Symbol.iterator]: function* () {
//         let curIndex = 0;
//         while(curIndex !== this.length){
//             yield this[curIndex];
//             curIndex++;
//         }
//     }
// }

// console.log([...obj])
let fs = require('fs')

function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (data) {
                res(data)
            } else {
                rej(err)
            }
        })
    })
}

// readFile('./data/number.txt').then((val) => {
//     return readFile(val)
// }).then((val) => readFile(val)).then(val => console.log(val));

function* read() {
    let val1 = yield readFile('./data/number.txt');
    let val2 = yield readFile(val1);
    let val3 = yield readFile(val2);
    return val3
}

// let oG = read();
// let {
//     value,
//     done
// } = oG.next();
// value.then((val) => {
//     let {
//         value,
//         done
//     } = oG.next(val);
//     value.then((val) => {
//         let {
//             value,
//             done
//         } = oG.next(val);
//         value.then((val) => {
//             console.log(val)
//         })
//     })
// })

// 递归优化
function Co(oIt) {
    return new Promise((res, rej) => {
        let next = (data) => {
            let {value, done} = oIt.next(data);
            if (done) {
                res(value);
            }else {
                return value.then((val) => {
                    next(val)
                }, rej)
            }
        }
        next();
    })
}

Co(read()).then(val => {
    console.log(val)
}, rs => {

})