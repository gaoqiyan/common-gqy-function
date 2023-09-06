// 格式化时间
const formatDateTime = (time, format) => {
    const date = new Date(time);
    const o = {
        'M+': date.getMonth() + 1, 
        'd+': date.getDate(),
        'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(),
        a: date.getHours() < 12 ? '上午' : '下午',
        A: date.getHours() < 12 ? 'AM' : 'PM',
    };

    const re = /(y+)/;
    if (re.test(format)) {
        const t = re.exec(format)[1];
        format = format.replace(
            t,
            (date.getFullYear() + "").substring(4 - t.length)
        );
    }
    for (let k in o) {
        const regx = new RegExp("(" + k + ")");
        if (regx.test(format)) {
            const t = regx.exec(format)[1];
            format = format.replace(
                t,
                t.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length)
            );
        }
    }
    return format;
}

// 判断是否是24节气
const judgeSolarTerms = (dateTime) => {
    let timer = new Date(dateTime);
    yyyy = timer.getFullYear();
    mm = timer.getMonth();
    dd = timer.getDate();
    var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
    var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
    var tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    var tmp2 = tmp1.getUTCDate();
    var solarTerms = "";
    if (tmp2 == dd) solarTerms = solarTerm[mm * 2 + 1];
    tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    tmp2 = tmp1.getUTCDate();
    if (tmp2 == dd)
        solarTerms = solarTerm[mm * 2];
    return solarTerms;
}

// 获取农历日期
const getLunarDateTime = (dateTime) => {
    let nowYear;
    let nowMonth;
    let nday = -1;
    let lmonth, lday, lleap;
    let lunarInfo = new Array(
        0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900
        0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910
        0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920
        0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930
        0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940
        0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950
        0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960
        0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970
        0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980
        0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, // 1990
        0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000
        0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010
        0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020
        0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030
        0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040
    );
    let lunarText = new Array('', '正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '腊');
    let lunarTextSpecial = new Array('初', '十', '廿', '卅', '□');
    function lYearDays(y) {
        let i, sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
        return (sum + leapDays(y));
    }
    function leapDays(y) {
        if (leapMonth(y)) return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
        else return (0);
    }
    function leapMonth(y) {
        return (lunarInfo[y - 1900] & 0xf);
    }
    function monthDays(y, m) {
        return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
    }
    function Lunar(y, m, d) {
        let i, leap = 0,
            temp = 0;
        let offset = (Date.UTC(y, m, d) - Date.UTC(1900, 0, 31)) / 86400000;
        for (i = 1900; i < 2050 && offset > 0; i++) {
            temp = lYearDays(i);
            offset -= temp;
        }
        if (offset < 0) {
            offset += temp;
            i--;
        }
        this.year = i;
        leap = leapMonth(i);
        this.isLeap = false;
        for (i = 1; i < 13 && offset > 0; i++) {
            if (leap > 0 && i == (leap + 1) && this.isLeap == false) {
                --i;
                this.isLeap = true;
                temp = leapDays(this.year);
            } else {
                temp = monthDays(this.year, i);
            }
            if (this.isLeap == true && i == (leap + 1)) this.isLeap = false;
            offset -= temp;
        }
        if (offset == 0 && leap > 0 && i == leap + 1) if (this.isLeap) {
            this.isLeap = false;
        } else {
            this.isLeap = true; --i;
        }
        if (offset < 0) {
            offset += temp; --i;
        }
        this.month = i;
        this.day = offset + 1;
    }
    function GetcDay(d) {
        let s;
        switch (d) {
            case 10:
                s = '初十';
                break;
            case 20:
                s = '二十';
                break;
            case 30:
                s = '三十';
                break;
            default:
                s = lunarTextSpecial[Math.floor(d / 10)];
                s += lunarText[d % 10];
                break;
        }
        return (s);
    }
    nowTime = new Date(dateTime);
    nowYear = nowTime.getFullYear();
    nowMonth = nowTime.getMonth() + 1;
    nday = nowTime.getDate();
    let lObj = new Lunar(nowYear, nowMonth - 1, nday);
    lmonth = lunarText[lObj.month];
    lday = GetcDay(lObj.day);
    lleap = lObj.isLeap;
    if (lleap == 1) {
        lmonth = "闰" + lmonth;
    }
    let lunarTime = lmonth + "月" + lday;
    return lunarTime
}

export { formatDateTime, judgeSolarTerms, getLunarDateTime }
