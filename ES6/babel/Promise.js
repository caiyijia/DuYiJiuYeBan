const oBtn = document.getElementById('btn');
const oInp = document.getElementById('inp');
let arr = [];
oBtn.onclick = function(){
    arr.push(oInp.value);
    newShow(arr);
}

function show(data) {
    console.log(data);
}

function after(num, func) {
    return function() {
        if(--num == 0) {
            func.apply(window, arguments);
        }
    }
}
let newShow = after(5, show);