## toastFun方法

弹出一个提示框；
这个函数接受三个参数，
第一个参数为展示文案(string)；
第二个参数为展示时间(number)， 默认 2000；
第三个参数为自定义样式(object):
{
    maxWidth: '100%', // toast 最大宽度，默认100%
    backgroundColor: 'rgba(0,0,0,0.8)', // toast 背景颜色，默认rgba(0,0,0,0.8)
    color: '#FFFFFF', // toast 文案颜色，默认#FFFFFF
    fontSize: '14px', // toast 字体大小 默认 14px
    zIndex: '9999', // toast 层级 默认 9999
}

```javascript
toastFun('提示文案', 2000, {
    maxWidth: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#FFFFFF',
    fontSize: '14px',
    zIndex: '9999',
})
```
