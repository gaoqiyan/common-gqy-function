## uniqueArray方法

对象数组去重
这个函数接受两个参数，第一个参数为对象数组，第二个参数为唯一的key名，根据此键名进行去重

```javascript
var arr1 = [{ id: 'aaa', name: 'bb' }, { id: 'bbb', name: 'xx' }, { id: 'aaa', name: 'ccc' }]
uniqueArray(arr1, 'id');
```
