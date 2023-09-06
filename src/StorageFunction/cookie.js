// 设置cookie 
const setCookie = (name, value, timer) => {
    if (!name || !value) return false;
    var exp = new Date();
    if (timer) {
        exp.setTime(exp.getTime() + timer);
    } else {
        exp.setTime(exp.getTime() + 15 * 24 * 60 * 60 * 1000);
    }
    const cookie = name + "=" + encodeURIComponent(decodeURIComponent(value)) + ";expires=" + exp.toGMTString();
    document.cookie = cookie
}
// 读取cookie
const getCookie = (name) => {
    if (!name) return false;
    var reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    var arr = document.cookie.match(reg);
    if(arr){
        return decodeURIComponent(arr[2]);
    }else{
        return '';
    }
}
// 删除cookie
const delCookie = (name) => {
    if (!name) return false;
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval= getCookie(name);
    if(cval != null) {
        document.cookie= name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

export { setCookie, getCookie, delCookie }
