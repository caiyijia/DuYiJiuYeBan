var oDiv = document.getElementById('show');
var oInput = document.getElementById('demo');

var oData = {
    value: 'duyi'
};

oInput.oninput = function () {
    oData.value = this.value;
}

function upDate () {
    oDiv.innerText = oData.value;
}

upDate();

function Observer (data) {
    if (!data || typeof data != 'object') {
        return data;
    }
    Object.keys(data).forEach(function(key) {
        definedReactive(data, key, data[key]);
    })
}
function definedReactive (data, key, val) {

}

Observer(oData);