// 防抖
const debounce = (fn, delay) => {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
            timer = null;
        }, delay);
    };
}
 
// 节流
const throttle = (fn, delay) => {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                fn.apply(context, args);
                timer = null;
            }, delay);
        }
    };
}

// 深拷贝
const deepClone = (obj) => {
    if (!obj && typeof obj !== 'object') {
        return;
    }
    var objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

export { debounce, throttle, deepClone }
