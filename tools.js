// 兼容的事件绑定
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function () {
            // 此方法下this指向window
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;
    }
}

 // 阻止默认事件的函数
 function cancelHandler(event) {
    if(event.preventDefault) {
        event.preventDefault();
    }else {
        event.returnValue = false;
    }
}

//鼠标拖动事件
function drag(elem) {
    var disX,
        disY;
    addEvent(elem, 'mousedown', function(e) {
        var event = e || window.event;
        disX = event.clientX - parseInt(getStyle(elem, 'left'));
        disY = event.clientY - parseInt(getStyle(elem, 'top'));
        addEvent (document, 'mousemove', mouseMove);
        addEvent(document, 'mouseup', mouseUp);
        stopBubble(event);
        cancelHandler(event);
    });

    function mouseMove(e) {
        var event = e || window.event;
        elem.style.left = event.clientX - disX + 'px';
        elem.style.left = event.clientY - disY + 'px';
    }

    function mouseUp(e) {
        var event = e || window.event;
        removeEvent(document, 'mousemove', mouseMove);
        removeEvent(document, 'mouseup', mouseUp);
    }
}

//匀速运动
function startMove(dom, velocity, target) {
    clearInterval(timer);
    var remain = target % velocity;
    timer = setInterval(function () {
        if (Math.abs(target - dom.offsetLeft) <= remain) {
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + velocity + 'px';
        }
    }, 30);
}

// 任意元素的某一属性值发生运动
function startMove(dom, attr, target) {
    clearInterval(dom.timer);
    var iSpeed = null,
        iCur = null;
    dom.timer = setInterval(function () {
        if (attr === 'opacity') {
            iCur = parseFloat(getStyle(dom, attr)) * 100;
        } else {
            iCur = parseInt(getStyle(dom, attr));
        }
        iSpeed = (target - iCur) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (iCur == target) {
            clearInterval(dom.timer);
        } else {
            if (attr == 'opacity') {
                dom.style.opacity = (iCur + iSpeed) / 100;
            }else {
                dom.style[attr] = iCur + iSpeed + 'px';
            }
        }
    }, 30)
}

// 获取属性值
function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr];
    }
}

//深度克隆
function deepClone (target, origin) {
    var toStr = Object.prototype.toString,
        arrObj = '[Object Array]',
        target = target || {};
    for(var prop in origin){
        if(origin.hasOwnProperty(prop)){
            if(typeof(origin[prop]) == 'object'){
                target[prop] = toStr.call(origin[prop]) == arrObj ? [] : {};
                deepClone(target[prop], origin[prop]);
            }
            target[prop] = origin[prop];
        }
    }
    return target;
}

// 防抖
function debounce (handler, delay) {
    var timer;
    return function () {
        var _self = this, _arg = arguments;
        clearTimeout(timer);
        timer = setInterval(() => {
            handler.apply(_self, _arg);
        }, delay);
    }
}