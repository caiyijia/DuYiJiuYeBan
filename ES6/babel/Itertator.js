// function OuterIterator(o) {
//     let curIndex = 0;
//     let next = () => {
//         return {
//             value: o[curIndex],
//             done: o.length == ++curIndex,
//         }
//     }
//     return {
//         next
//     }
// }
// let arr = [1, 2, 3]

// let oIt = OuterIterator(arr)

// next {value:'', done: ''}

let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: function () {
        let curIndex = 0;
        let next = () => {
            return {
                value: this[curIndex],
                done: curIndex++ == this.length,
            }
        }
        return {
            next
        }
    }
}

// console.log(obj[Symbol.iterator].next())
for(let p of obj) {
    console.log(p)
}