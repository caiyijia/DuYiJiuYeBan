function fn() {
    console.log('cai');
}
function bindEvent() {
    var box = document.getElementsByClassName('box')[0];
    box.onclick = function () {
        console.log('click');
    }
}
bindEvent();