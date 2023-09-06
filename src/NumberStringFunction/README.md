## foramteVoteCount方法

千分位格式化；
这个函数接受一个参数：要格式化的数字，传入的数字会先进行取整操作

```javascript
foramteVoteCount(121123123123); // '121,123,123,123'
foramteVoteCount(121123123123.121212); // '121,123,123,123'
```

## foramteFenToYuan 方法

单位分转成元 保留2位小数；
这个函数接受一个参数：要转化的金额

```javascript
foramteFenToYuan(1); // '0.01'
foramteFenToYuan(100); // '1.00'
foramteFenToYuan('1123.6'); // '11.24'
```