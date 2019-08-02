/* 
    1. 必须使用new调用
    2. class Plane.prototype 不能枚举
    3. 静态属性要放到Plane，非原型
*/

function _classCallCheck(_this, _constructor) {
    if (!(_this instanceof _constructor)) {
        throw new TypeError('Class constructor connot be invoked without "new"')
    }
}

// 处理公有属性和静态属性
function _defineProperties(target, prop) {
    prop.forEach(function (ele) {
        Object.defineProperty(target, ele.key, {
            value: ele.value,
            writable: true,
            configurable: true
        })
    })
}

function _createClass(_constructor, _prototypeProperties, _staticProperties) {
    if (_prototypeProperties) {
        _defineProperties(_constructor.prototype, _prototypeProperties);
    }
    if (_staticProperties) {
        _defineProperties(_constructor, _staticProperties)
    }
}

var Plane = (function () {
    function Plane(name) {
        _classCallCheck(this, Plane);
        this.name = name || "Normal Plane";
        this.blood = 100;
    }
    _createClass(Plane, [{
        key: 'fly',
        value: function () {
            console.log('fly~')
        }
    }], [{
        key: 'alive',
        value: function () {
            return true;
        }
    }])
    return Plane;
})()

var oP = new Plane('cc&Normal Plane');

function _inherit (sub, sup) {
    Object.setPrototypeOf(sub.prototype, sup.prototype);
}

var AttackPlane = (function (Plane) {

    _inherit(AttackPlane, Plane);
    function AttackPlane() {
        _classCallCheck(this, Plane);
        var _this = this;
        var that = Plane.call(_this, name);
        if (typeof that == 'object' || typeof that == 'function') {
            _this = that;
        }
        _this.logo = 'CC';
        return _this;
        

    };
    _createClass(AttackPlane, [{
        key: 'bullet',
        value: function () {
            console.log('biubiubiu~')
        }
    }], [{
        key: 'alive',
        value: function () {
            return true;
        }
    }])

    return AttackPlane;
})(Plane)

var oAp = new AttackPlane ();
console.log(oAp)