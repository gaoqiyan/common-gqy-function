// 设置localStorage
const setLocalStorage = (name, value) => {
    if (!name || !value) return false;
    let newVal = JSON.stringify(value);
    localStorage.setItem(name, newVal);
}
// 获取localStorage
const getLocalStorage = (name) => {
    if (!name) return false;
    let value = localStorage.getItem(name);
    if (value) return JSON.parse(value);
    else return '';
}
// 删除localStorage
const removeLocalStorage = (name) => {
    if (!name) return false;
    localStorage.removeItem(name);
}
// 清除所有localStorage
const clearLocalStorage = () => {
    localStorage.clear();
}

export { setLocalStorage, getLocalStorage, removeLocalStorage, clearLocalStorage }
