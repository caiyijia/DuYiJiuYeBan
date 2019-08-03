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
                    res(nextResolveValue);
                } catch (e) {
                    rej(e);
                }
            }, 0);
        }

        if (self.status === 'Rejected') {
            setTimeout(function () {
                try {
                    var nextRejectValue = onRejected(self.rejectReason);
                    rej(nextRejectValue);
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
                        res(nextResolveValue)
                    } catch (e) {
                        rej(e)
                    }
                }, 0)
            });
            self.RejectCallBackList.push(function () {
                setTimeout(function () {
                    try {
                        var nextRejectValue = onRejected(self.rejectReason);
                        rej(nextRejectValue);
                    } catch (e) {
                        rej(e)
                    }
                }, 0)
            });
        }
    })

    return nextPromise;
}