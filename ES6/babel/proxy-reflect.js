let oData = {
    val: 'duyi',
    _val: 'ccc'
};
let oProxyData = new Proxy(oData, {
    set(target, key, value, receiver) {
        Reflect.set(target, key, value)
        update();
    },
    get(target, key, receiver) {
        return Reflect.get(target, key, receiver);
    },
    has(target, key) {
        return key.indexOf('_') != -1 ? false : key in oData;
    },
    deleteProperty() {

    }
});
// 读写控制
console.log(delete oProxyData.val)
oProxyData.name = 22;
console.log(oProxyData.name)

function update() {
    console.log('updated')
}
