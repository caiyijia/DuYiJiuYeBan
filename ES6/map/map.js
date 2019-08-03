function myMap() {
    this.bucketLength = 8;
    this.init()
}

myMap.prototype.init = function () {
    this.bucket = new Array(this.bucketLength);
    for (let i = 0; i < this.bucketLength; i++) {
        this.bucket[i] = {
            type: 'bucket_' + i,
            next: null
        }
    }
}

myMap.prototype.makeHash = function (key) {
    let hash = 0;
    if (typeof key !== 'string') {

        if (typeof key == 'number') {
            // NaN 也是数字类型
            hash = Object.is(key, NaN) ? 0 : key;
        } else if (typeof key == 'object') {
            // {} [] null
            hash = 1;
        } else if (typeof key == 'boolean') {
            hash = Number(key);
        } else {
            hash = 2;
        }
    } else {
        for (let i = 0; i < 3; i++) {
            hash += key[i] ? key[i].charCodeAt(0) : 0;
        }
    }
    return hash % 8
}


myMap.prototype.set = function (key, value) {
    let hash = this.makeHash(key);
    let oTempBucket = this.bucket[hash];
    while (oTempBucket.next) {
        if (oTempBucket.next.key == key) {
            oTempBucket.next.value = value;
            return
        } else {
            oTempBucket = oTempBucket.next;
        }
    };
    oTempBucket.next = {
        key: key,
        value: value,
        next: null
    };
}

myMap.prototype.get = function (key) {
    let hash = this.makeHash(key);
    let oTempBucket = this.bucket[hash];
    while (oTempBucket) {
        if (oTempBucket.key == key) {
            return oTempBucket.value;
        } else {
            oTempBucket = oTempBucket.next;
        }
    }
    return undefined;
}

myMap.prototype.delete = function (key) {
    let hash = this.makeHash(key);
    let oTempBucket = this.bucket[hash];
    while (oTempBucket.next) {
        if (oTempBucket.next.key == key) {
            oTempBucket.next = oTempBucket.next.next;
            return true;
        } else {
            oTempBucket = oTempBucket.next;
        }
    }
    return false;
}

myMap.prototype.has = function (key) {
    let hash = this.makeHash(key);
    let oTempBucket = this.bucket[hash];
    while (oTempBucket) {
        if (oTempBucket.next && oTempBucket.next.key == key) {
            return true;
        } else {
            oTempBucket = oTempBucket.next;
        }
    }
    return false;
}

myMap.prototype.clear = function (key) {
    this.init();
}

let oMp = new myMap();
let obj1 = {
    name: 'cyj'
}
oMp.set('name1', 'cyj');
oMp.set('name2', 'yjc');
oMp.set(obj1, 'object');
oMp.set('name1', '1');
oMp.set(obj1, '+++');
oMp.set(function test() {}, true)