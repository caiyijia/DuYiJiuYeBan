// node
// let a = 10;
// console.log(a)
let fs = require('fs');
// // 异步
// fs.readFile('./data/number.txt', 'utf-8', (err, data)=>{
//     if(data) {
//         fs.readFile(data, 'utf-8', (err, data) => {   
//             fs.readFile(data, 'utf-8', (err, data) => {
//                 console.log(data)
//             })
//         })
//     }
// })

// 几个并发操作，获得几个结果
function show(data) {
    console.log(data);
}

function show1(data) {
    console.log(data, 1);
}

let oStudent = {

}
fs.readFile('./data/number.txt', 'utf-8', (err, data) => {
    if (data) oStudent.number = data;
    Store.fire(oStudent);
})
fs.readFile('./data/name.txt', 'utf-8', (err, data) => {
    if (data) oStudent.name = data;
    Store.fire(oStudent);
})
fs.readFile('./data/score.txt', 'utf-8', (err, data) => {
    if (data) oStudent.score = data;
    Store.fire(oStudent);
})

function after(times, cb) {
    return function () {
        --times == 0 && cb.apply(null, arguments);
    }
}

let newShow = after(3, show)

// 发布订阅
let Store = {
    list: [],
    times: 3,
    subscribe(func) {
        this.list.push(func);
    },
    fire(...arg) {
        --this.times == 0 &&
            this.list.forEach((ele) => {
                ele.apply(null, arg);
            })
    }
}

Store.subscribe(show);
Store.subscribe(show1);