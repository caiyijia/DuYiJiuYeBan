function MyPromise(executor) {
    var self = this;
    self.status = 'pending';
    self.resolveValue = null;
    self.rejectReason = null;
    // 将需要异步执行的函数存入数组
    self.ResolveCallBackList = [];
    self.RejectCallBackList = [];

    // 实现状态变更
    function resolve(value) {
        if (self.status == 'pending') {
            self.status = 'Fulfilled';
            self.resolveValue = value;
            self.ResolveCallBackList.forEach(function (ele) {
                ele()
            })
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'Rejected';
            self.rejectReason = reason;
            self.RejectCallBackList.forEach(function (ele) {
                ele()
            })
        }
    }

    // 即使有错误也要继续执行
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

function SolveReturnPromise(nextPromise, returnValue, res, rej){
    if(returnValue instanceof MyPromise) {
        returnValue.then(function() {
            res(val)
        }, function(){
            rej(reason)
        })
    }else {
        res(returnValue)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    // 处理空Then
    if(!onFulfilled) {
        onFulfilled = function(v) {
            return v;
        }
    }
    if(!onRejected) {
        onRejected = function(r) {
            throw new TypeError(r);
            // console.log(r)
        }
    }
    
    var self = this;
    // 用nextPromise实现链式调用
    var nextPromise = new MyPromise(function (res, rej) {
        if (self.status == 'Fulfilled') {
            // then
            setTimeout(function () {
                try {
                    var nextResolveValue = onFulfilled(self.resolveValue);
                    // res(nextResolveValue);
                    SolveReturnPromise(nextPromise, nextResolveValue, res, rej)
                } catch (e) {
                    rej(e);
                }
            }, 0);
        }

        if (self.status === 'Rejected') {
            setTimeout(function () {
                try {
                    var nextRejectValue = onRejected(self.rejectReason);
                    SolveReturnPromise(nextRejectValue, nextResolveValue, res, rej)                    
                } catch (error) {
                    rej(error)
                }

            }, 0)
        }

        if (self.status === 'pending') {
            self.ResolveCallBackList.push(function () {
                setTimeout(function () {
                    try {
                        var nextResolveValue = onFulfilled(self.resolveValue);
                        SolveReturnPromise(nextPromise, nextResolveValue, res, rej);                        
                    } catch (e) {
                        rej(e)
                    }
                }, 0)
            });
            self.RejectCallBackList.push(function () {
                setTimeout(function () {
                    try {
                        var nextRejectValue = onRejected(self.rejectReason);
                        SolveReturnPromise(nextRejectValue, nextResolveValue, res, rej);
                    } catch (e) {
                        rej(e)
                    }
                }, 0)
            });
        }
    })

    return nextPromise;
}

MyPromise.race = function(promiseArr) {
    return new MyPromise(function(resolve, reject){
        promiseArr.forEach(function(promise, index) {
            promise.then(resolve, reject);
            console.log(promise)
            
        })
    })
}

// 都成功时，返回一个包含所有结果的数组
// 或者，返回第一个失败的值
/* 测试原生Promise.all输出的数组是按照原数组的顺序，而不是产生结果的顺序，所以不能用push */
MyPromise.all = function(promiseArr) {
    return new MyPromise(function(resolve, reject){
        if (!isArray(promises)) {
            return reject(new TypeError('arguments should be an array'));
        }
        var resolvedArr = [];
        var counter = 0;
        promiseArr.forEach(function(promise, index, arr) {
            var len = arr.length;
            promise.then(function(val){
                counter = counter + 1;
                resolvedArr[index] = val;
                console.log(resolvedArr)
                // console.log(counter)
                if (counter == len){
                    // console.log(resolvedArr)
                    return resolve(resolvedArr)
                }
            },function(reason){
                return reject(reason);
            })
        })
    })

}