// function sum () {
//     let sumNumber = 0;
//     let arg = [].slice.call(arguments, 0);
//     for(var i = 0; i < arguments.length; i++){
//         sumNumber += arguments[i];
//     }
//     return sumNumber;
// };
// sum(1, 2, 3);
// sum(1, 2, 3, 4, 5)

// ES6
// function sum (...arg) {
//     // console.log(arg, arg instanceof Array);
//     let sumNumber = 0;
//     arg.forEach(function(ele){
//         sumNumber += ele;
//     });
//     return sumNumber;
// }
// console.log(sum(1, 2, 3))

// ES7
let company = {
    name: 'C',
    age: 18
};
let leader = {
    name: 'Yj',
    age: 25
};
let teachDepartment = {
    leader: {
        ...leader
    },
    personNum: 25
}

Object.assign({}, company, teachDepartment);

// let obj = {
//     ...company,
//     ...teachDepartment,
//     leader: {
//         ...leader
//     }
// }

let obj = JSON.parse(JSON.stringify(teachDepartment));

obj.leader.name = 'cy';