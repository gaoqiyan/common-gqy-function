// 验证合法性
const checkCodeValid = (type, code) =>{
    const regObj = {
        "phone": /^1[3456789]\d{9}$/,
        "IDCard": /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        "email": /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        "url": /^((https|http|ftp):\/\/)?(([\w_!~*'()\.&=+$%-]+: )?[\w_!~*'()\.&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|(localhost)|([\w_!~*'()-]+\.)*\w+\.[a-zA-Z]{1,6})(:[0-9]{1,5})?((\/?)|(\/[\w_!~*'()\.;?:@&=+$,%#-]+)+\/?)$/i,
        'postCode': /^[0-9]\d{5}(?!\d)/,
        'qqCode': /^[1-9][0-9]{4,9}$/,
    }
    var reg = regObj[type];
    if (!reg) return false;
    if(!(reg.test(code))){ 
        return false; 
    } else {
        return true;
    }
}

export { checkCodeValid }