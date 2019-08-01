// ES5

// var obj = {
//     name: 'CY'
// };

// for (let prop in obj) {
//     console.log(prop);
// }

// var obj = {
//     name: 'cst',
//     age: 20,
//     __proto__:{
//         sex: 'male',
//         __proto__: {
//             lastName: 'CAI'
//         }
//     }
// }

// // Enumerable
// for (let prop in obj) {
//     console.log(prop);
// }

// var obj = {

// };

// 可读可写可枚举 默认都是true
var tempValue = '';

// 默认的值都是false
Object.defineProperty(obj, 'name', {
    // value: 'CY',
    // writable: false,
    configurable: true,
    enumerable: true,
    get: function () {
        console.log('get✅')
        return tempValue;
    },
    set: function(newValue) {
        tempValue = newValue;
    }
});

// value & writable 与 set get不能同时使用
var obj = {
    tempValue: 'duyi',
    get name () {
        return this.tempValue;
    },
    set name (value) {
        this.tempValue = value;
    }
}

console.log(obj.name);
obj.name = 10;
console.log(obj.name);
// for (let prop in obj) {
//     console.log(prop)
// }

// delete obj.name;
// console.log(obj.name);