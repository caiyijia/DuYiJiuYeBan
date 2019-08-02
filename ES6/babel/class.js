/* 
    - 私有属性
    - 公有属性（原型属性）
    - 静态属性（函数属性）
*/
class Plane {
    static alive() {
        return true;
    }
    constructor () {
        this.name = name || 'Normal Plane'
        this.blood = 100;
    }
    fly() {
        console.log('fly～');
    }
    // ES7 私有属性
    // name = 'CAI'
    
}

var oP = new Plane();
// console.log(oP)
// oP.fly();
// console.log(Plane.alive())

class AttackPlane extends Plane{
    constructor() {
        // 继承私有属性
        super();
        this.logo = 'CC'
    }
    bullet() {
        console.log('biubiubiu~')
    }
}

var oAp = new AttackPlane()

/* 
    1. 必须使用new调用
    2. class Plane.prototype 不能枚举
    3. 静态属性要放到Plane，非原型
*/