var oInput = document.getElementById('inp');
var oBtn = document.getElementById('btn');
var keyValue = '';

oInput.oninput = function () {
    keyValue = this.value;
}

oBtn.onclick = () => {
    getContent(keyValue);
};

var getContent = (data) => {
    let url = 'urlA-';
    console.log('ask ' + url + 'for request, data:' + data);
}

var newGetContent = dealFunc(getContent);

function dealFunc(func) {
    return function (data) {
        var urlB = '';
        console.log('ask ' + urlB + 'for request, data:' + data);
        return func.apply(this, arguments)
    }
}