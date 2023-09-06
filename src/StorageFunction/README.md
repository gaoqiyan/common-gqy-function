## setCookie方法

设置cookie
这个函数接受三个参数：
第一个参数为key值：必填；
第二个参数为key值对应的value：必填；
第三个参数为过期时间，填写过期毫秒数：非必填，如果不填写，15天后过期；

```javascript
setCookie('name', 'gqy', 10 * 24 * 60 * 60 * 1000);
// 设置 name值为'gqy'的cookie，10天后过期
```

## getCookie方法

获取cookie
这个函数接受一个参数，为要取值的字段：必填；

```javascript
getCookie('name');
// 获取cookie中key为name的值
```

## delCookie方法

删除cookie
这个函数接受一个参数，为要删除值的字段：必填；

```javascript
delCookie('name');
// 删除cookie中key为name的值
```

## setLocalStorage方法

设置localStorage
这个函数接受两个参数：
第一个参数为key值：必填；
第二个参数为key值对应的value：必填；

```javascript
setLocalStorage('name', 'gqy');
// 设置 name值为'gqy'的localStorage
```

## getLocalStorage方法

获取localStorage
这个函数接受一个参数，为要取值的字段：必填；

```javascript
getLocalStorage('name');
// 获取localStorage中key为name的值
```

## removeLocalStorage方法

删除localStorage
这个函数接受一个参数，为要删除值的字段：必填；

```javascript
removeLocalStorage('name');
// 删除localStorage中key为name的值
```

## clearLocalStorage方法

清除所有localStorage

```javascript
clearLocalStorage();
```
