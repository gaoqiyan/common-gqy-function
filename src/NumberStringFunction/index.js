// 千分位格式化
const foramteVoteCount = (targetNum) => {
    num = parseInt(targetNum).toString();
    let ret = Array.from(num)
        .reverse()
        .reduce((result = [], currentValue, currentIndex, arr) => {
            if (
                (currentIndex + 1) % 3 === 0 &&
                currentIndex + 1 !== arr.length
            ) {
                result.push(currentValue, ",");
                return result;
            }
            result.push(currentValue);
            return result;}, []);
    return ret.reverse().join("");
};

// 单位分转成元 保留2位小数
const foramteFenToYuan = (val) => {
    var str = (Number(val) / 100).toFixed(2) + '';
    var intSum = str.substring(0,str.indexOf(".")); // 取到整数部分
    var dot = str.substring(str.length,str.indexOf(".")) // 取到小数部分搜索
    var ret = intSum + dot;
    return ret;
};

export {foramteVoteCount, foramteFenToYuan }