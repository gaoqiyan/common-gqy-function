## formatDateTime方法

格式化时间
这个函数接受两个参数，第一个参数是要格式化的时间，可以是 Date 对象或表示日期时间的字符串，第二个参数是要格式化的格式，例如 yyyy-MM-dd HH:mm:ss。该函数会将日期时间格式化为指定的格式，并返回格式化后的字符串。
该函数使用了正则表达式来匹配格式字符串中的占位符，然后根据对应的日期时间值来替换占位符。其中，y 会被替换为年份，M、d、h、H、m、s、q、S、a、A 分别表示月份、日期、小时（12 小时制）、小时（24 小时制）、分钟、秒、季度、毫秒、上午/下午、AM/PM。

```javascript
formatDateTime(new Date(), 'yyyy/MM/dd HH:mm:ss S')
// '2023/08/29 18:55:47 591'
```

## judgeSolarTerms方法

判断日期是否为24节气
这个函数接受一个参数：要判断的时间；如果是24节气中的一个，则返回具体节气，否则返回 '';

```javascript
judgeSolarTerms('2023/08/24') // ''
judgeSolarTerms('2023/08/23') // '处暑'
```

## getLunarDateTime方法

转化输出输入日期对应的农历日期
这个函数接受一个参数：要转化的时间，返回值为农历日期，目前只能准确的获取1900-2049之前的日期

```javascript
getLunarDateTime('2023/08/24') // '七月初九'
getLunarDateTime('1995/09/18') // '八月廿四'
```