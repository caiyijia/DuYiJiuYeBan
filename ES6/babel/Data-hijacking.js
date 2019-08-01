var oDiv = document.getElementById('show');
var oInput = document.getElementById('demo');

var oData = {
    valueObj: {
        value: 'duyi'
    },
    sex: 'm'
};

oInput.oninput = function () {
    oData.value = this.value;
}

function upDate() {
    oDiv.innerText = oData.valueObj.value;
}

// upDate();

function Observer(data) {
    if (!data || typeof data != 'object') {
        return data;
    }
    Object.keys(data).forEach(function (key) {
        definedReactive(data, key, data[key]);
    })
}

function definedReactive(data, key, val) {
    Observer(val);
    Object.defineProperty(data, key, {
        get() {
            return val;
        },
        set(newValue) {
            if (newValue == val) return;
            val = newValue;
            upDate();

        }
    })
}

Observer(oData);

// console.log(oData.value);
// oData.valueObj.value = 'haha'

let arr = [];
let {push} = Array.prototype;

function update() {
    console.log('update');
}

Object.defineProperty(Array.prototype, 'push', {
    value: (() => ((...arg) => {
        push.apply(arr, arg);
        update();
    }))()
});

arr.push(1,2)