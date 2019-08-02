const oInput = document.getElementById('inp');
const oBtn = document.getElementById('btn');

@Skin
class Search {
    constructor() {
        this.keyValue = '';
    }
    @myReadOnly
    url = 'urlA-';
    @dealData('Zhang')
    getContent(a, b) {
        console.log('ask ' + this.url + ' for request, data:' + this.keyValue, a, b);
        return 10;
    }
};

function Skin(target) {
    target.aaa = 30;
}

// 装饰私有属性
function myReadOnly(proto, key, descriptor) {
    // console.log(proto, key, descriptor);
    descriptor.initializer = function () {
        return 6;
    }
}

// 装饰原型属性
function dealData(ms) {
    return function (proto, key, descriptor) {
        console.log(proto, key, descriptor);
        let oldValue = descriptor.value;
        // 代理思想
        descriptor.value = function () {
            var urlB = 'urlB-'
            console.log('ask ' + urlB + ' for request, data:' + this.keyValue + ms);
            return oldValue.apply(this, arguments);
        }
    }
}

let oS = new Search();
oInput.oninput = function () {
    oS.keyValue = this.value;
}

oBtn.onclick = function () {
    oS.getContent(1,2);
}






// var keyValue = '';

// oInput.oninput = function () {
//     keyValue = this.value;
// }

// oBtn.onclick = () => {
//     getContent(keyValue);
// };

// var getContent = (data) => {
//     let url = 'urlA-';
//     console.log('ask ' + url + 'for request, data:' + data);
// }

// var newGetContent = dealFunc(getContent);

// function dealFunc(func) {
//     return function (data) {
//         var urlB = '';
//         console.log('ask ' + urlB + 'for request, data:' + data);
//         return func.apply(this, arguments)
//     }
// }