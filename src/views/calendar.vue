<!--
 * @file: 日历组件
 * @author: Lv Mengmeng <lvmengmeng@baidu.com>
-->
<template>
    <div>
        <nav class="calendar-nav" :class="[luiFlag ? 'calendar-nav-lui' : '']" :style="{ top: styleTop + 'rem' }">
            <div v-if="$route.query.from === 'h5-hotel'" class="top-space"></div>
            <ul class="week-wrap" :class="{ 'scroll-wrap': supportSticky }">
                <li
                    v-for="(item, i) in weekList"
                    v-text="item"
                    :key="i"
                />
            </ul>
        </nav>
        <div class="calendar-container">
            <div
                v-for="(item, monthIndex) in monthList"
                :key="monthIndex"
                class="calendar-wrapper"
            >
                <p class="calendar-title" :style="{ top: (styleTop + 1.52) + 'rem' }">
                    {{ item.year }}年{{ item.month }}月
                </p>
                <table
                    class="calendar-box"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                >
                    <tr
                        v-for="(week, weekIndex) in checkWeek(item)"
                        :key="weekIndex"
                    >
                        <td v-for="dayIndex in 7" :key="dayIndex">
                            <span
                                @click="
                                    selectDate(
                                        item,
                                        checkDay(item, weekIndex, dayIndex)
                                    )
                                "
                                v-text="
                                    checkDay(item, weekIndex, dayIndex).text
                                "
                                :content="checkDay(item, weekIndex, dayIndex).specailText"
                                :class="
                                    checkDay(item, weekIndex, dayIndex)
                                        .className
                                "
                            />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="btn-container -iphoneX-padding-bottom">
            <p v-if="toastText" class="calendar-toast">
                {{ toastText }}
            </p>
            <div
                class="day-num"
                :class="{ 'disable-num': !hasSelected && !singleCheck }"
                @click="goBack"
            >
                <span v-if="singleCheck">确定</span>
                <span v-else> 确定（共{{ dayNum }}天）</span>
            </div>
        </div>
    </div>
</template>
<script>
import { getAmisData as serviceGetAmisData } from '@common/services/service/index';
const today = new Date();
const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
import { $ } from '@common/libs/js/util/util_dom';
export default {
    name: 'calendar',
    data() {
        return {
            startDate: {},
            endDate: {},
            selectStart: {},
            selectEnd: {},
            monthList: [],
            fixedNav: '',
            isSelected: false,
            toastText: '',
            timer: {},
            isIos: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            supportSticky: false,
            weekList: ['日', '一', '二', '三', '四', '五', '六'],
            // 农历节假日，需要定期维护
            lunarList: {
                '2024-02-10': '春节',
                '2024-02-24': '元宵节',
                '2024-04-04': '清明节',
                '2024-06-10': '端午节',
                '2024-08-10': '七夕节',
                '2024-09-17': '中秋节',
                '2024-10-11': '重阳节'
            },
            // 公历节日，每年都一样就不需要单独维护了
            holidayList: [
                // 一月
                { '1': '元旦' },
                // 二月
                { '14': '情人节' },
                // 三月
                { '8': '妇女节', '12': '植树节' },
                // 四月
                {},
                // 五月
                { '1': '劳动节', '4': '青年节' },
                // 六月
                { '1': '儿童节' },
                // 七月
                { '1': '建党节' },
                // 八月
                { '1': '建军节' },
                // 九月
                { '10': '教师节' },
                // 十月
                { '1': '国庆节' },
                // 十一月
                {},
                // 十二月
                { '24': '平安夜', '25': '圣诞节' }
            ],
            styleTop: 0,
            // 入住天数
            dayNum: 1,
            // 开始日期和接入日期是否选择
            hasSelected: true,
            mayDate: '2023-04-28'
        };
    },
    props: {
        time: {
            type: Object,
            default: () => ({})
        },
        removeStyleTop: {
            type: Boolean,
            default: false
        },
        singleCheck: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'hotel'
        },
        // 是否来自大模型
        luiFlag: {
            type: Boolean,
            default: false
        },
    },
    created() {
        // 前端飞线配置获取农历节假日
        // 飞线配置地址:https://amis.baidu.com/group/mapcarowner/scp/Carservice?page=1&search=28e5874f9c5a273eb8c90ac1e175273c
        serviceGetAmisData('28e5874f9c5a273eb8c90ac1e175273c').then(data => {
            // 农历日期
            if (data) {
                this.lunarList = data.lunarList;
                this.mayDate = data.mayDate;
                // 五一特殊样式
                const today = new Date();
                if (this.mayDate && today < +new Date(this.mayDate)) {
                    this.$set(this.holidayList, 3, { '29': '五', '30': '一' });
                    this.$set(this.holidayList, 4, {
                        '1': '提',
                        '2': '前',
                        '3': '订',
                        '4': '青年节'
                    });
                }
            }
            this.initDateObj();
        }).catch(e => {
            // 兜底
            this.initDateObj();
        });
        this.initTop();
        this.showToast('请选择入住日期', 2000);
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        if (this.removeStyleTop) {
            let ele = $('.calendar-nav');
            ele && ele.style.removeProperty('top');
        }
    },
    methods: {
        // h5有标题时需要整体下移1rem
        initTop() {
            if (document.getElementById('header')) {
                this.styleTop = 1;
            }
        },
        // 判断是否支持sticky
        isSupportSticky() {
            let prefixTestList = ['-webkit-', ''];
            let stickyText = '';
            for (let i = 0; i < prefixTestList.length; i++) {
                stickyText += 'position:' + prefixTestList[i] + 'sticky;';
            }
            // 创建一个dom来检查
            let div = document.createElement('div');
            div.style.cssText = stickyText;
            document.body.appendChild(div);
            let isSupport = /sticky/i.test(
                window.getComputedStyle(div).position
            );
            document.body.removeChild(div);
            div = null;
            return isSupport;
        },
        initDateObj() {
            this.startDate = this.splitDate(this.time.st);
            this.endDate = this.splitDate(this.time.et);
            this.selectStart = this.splitDate(this.time.setSt);
            // 天数计算
            if (!this.singleCheck) {
                this.dayNum = this.dayCount(this.time.setSt, this.time.setEt);
                this.selectEnd = this.splitDate(this.time.setEt);
            }
            let i = this.startDate.month;
            if (this.endDate.month >= i) {
                for (i; i <= this.endDate.month; i++) {
                    this.monthList.push({
                        year: this.startDate.year,
                        month: i
                    });
                }
            } else {
                for (i; i <= this.endDate.month + 12; i++) {
                    if (i > 12) {
                        this.monthList.push({
                            year: this.endDate.year,
                            month: i - 12
                        });
                    } else {
                        this.monthList.push({
                            year: this.startDate.year,
                            month: i
                        });
                    }
                }
            }
            this.fixedNav = this.monthList[0].year + '年' + this.monthList[0].month + '月';
            // 优先显示节假日。如果今天或者明天是节假日，那么不对this.holidayList 重新赋值为 "今天" 或 "明天"
            if (!this.holidayList[today.getMonth()][today.getDate()]) {
                this.holidayList[today.getMonth()][today.getDate()] = '今天';
            }
            if (!this.holidayList[today.getMonth()][today.getDate() + 1]) {
                this.holidayList[today.getMonth()][today.getDate() + 1] = '明天';
            }
            if (!this.holidayList[yesterday.getMonth()][yesterday.getDate()] && this.time.isDawn) {
                this.holidayList[yesterday.getMonth()][yesterday.getDate()] = '今天凌晨';
            }
        },
        // 拆分年月日
        splitDate(dataString) {
            return {
                year: +dataString.split('-')[0],
                month: +dataString.split('-')[1],
                day: +dataString.split('-')[2]
            };
        },
        // 获取月份中的第一天是所在星期的第几天
        getFirstDayOfMonth(year, month) {
            return new Date(year, month - 1, 1).getDay();
        },
        // 获取月份的天数
        getDaysInMonth(year, month) {
            return 32 - new Date(year, month - 1, 32).getDate();
        },
        // 获取月份的周数
        checkWeek(dayObj) {
            return Math.ceil(
                (this.getFirstDayOfMonth(dayObj.year, dayObj.month) +
                    this.getDaysInMonth(dayObj.year, dayObj.month)) /
                    7
            );
        },
        // 计算两个日期间的天数，负数表示日期a晚于日期b
        dayCount(dateA, dateB) {
            let a = new Date(dateA);
            let b = new Date(dateB);
            return (b.getTime() - a.getTime()) / 1000 / 3600 / 24;
        },
        // 格式化日期对象
        formatDate(year, month, day) {
            let monthStr = month + '';
            let dayStr = day + '';
            return (
                year +
                '-' +
                (monthStr.length < 2 ? '0' + monthStr : monthStr) +
                '-' +
                (dayStr.length < 2 ? '0' + dayStr : dayStr)
            );
        },
        // 设置class名
        setClassName(orig, className) {
            return orig === '' ? className : orig + ' ' + className;
        },
        // 处理显示内容
        checkDay(dayObj, weekIndex, dayIndex) {
            // 这个月的第几格
            let tdIndex = weekIndex * 7 + dayIndex;
            let firstDay = this.getFirstDayOfMonth(dayObj.year, dayObj.month);
            let dayNum = this.getDaysInMonth(dayObj.year, dayObj.month);
            let className = '';
            let text = '';
            // 展示伪类中content内容
            let specailText = '';
            if (tdIndex < firstDay + 1 || tdIndex - firstDay > dayNum) {
                // 空占位符
                return {
                    date: '',
                    className: '',
                    text: ''
                };
            } else {
                text = tdIndex - firstDay;
                // 点击日期
                let formatDayObj = this.formatDate(dayObj.year, dayObj.month, text);
                // 选中日期
                let formatSelectStart = this.formatDate(
                    this.selectStart.year,
                    this.selectStart.month,
                    this.selectStart.day
                );
                let formatSelectEnd = this.formatDate(
                    this.selectEnd.year,
                    this.selectEnd.month,
                    this.selectEnd.day
                );
                // 可选范围
                let formatStartDate = this.formatDate(
                    this.startDate.year,
                    this.startDate.month,
                    this.startDate.day
                );
                let formatEndDate = this.formatDate(
                    this.endDate.year,
                    this.endDate.month,
                    this.endDate.day
                );

                // 不可选日期
                if (
                    this.dayCount(formatStartDate, formatDayObj) < 0 ||
                    this.dayCount(formatEndDate, formatDayObj) > 0
                ) {
                    className = this.setClassName(className, 'disable');
                }
                // 中间日期
                if (
                    this.dayCount(formatSelectStart, formatDayObj) > 0 &&
                    this.dayCount(formatSelectEnd, formatDayObj) < 0
                ) {
                    className = this.setClassName(className, 'between');
                }
                // 特殊节日替换日期，优先显示农历节日
                if (
                    this.lunarList[formatDayObj] ||
                    this.holidayList[dayObj.month - 1][text]
                ) {
                    if (
                        this.dayCount(formatStartDate, formatDayObj) < 0 ||
                        this.dayCount(formatEndDate, formatDayObj) > 0
                    ) {
                        className = this.setClassName(className, 'disable-special');
                    } else {
                        className = this.setClassName(className, 'special');
                    }
                    specailText =
                        this.lunarList[formatDayObj] ||
                        this.holidayList[dayObj.month - 1][text];
                }
                let isLastDay = formatSelectStart.indexOf('30')!== -1 || formatSelectStart.indexOf('31') !== -1;
                // 入住日期
                if (this.dayCount(formatSelectStart, formatDayObj) === 0) {
                    // 相邻日期样式控制
                    className = this.dayNum === 1 && !isLastDay ?
                        this.setClassName(className, 'select first special-first')
                        : this.setClassName(className, 'select first');
                    if (this.singleCheck) {
                        className = this.dayNum === 1 && !isLastDay ?
                        this.setClassName(className, 'select first special-first single')
                        : this.setClassName(className, 'select first single');
                    }
                }
                // 离店日期
                if (this.dayCount(formatSelectEnd, formatDayObj) === 0) {
                    // 相邻日期样式控制
                    className = this.dayNum === 1 && !isLastDay ?
                        this.setClassName(className, 'select last special-last')
                        : this.setClassName(className, 'select last');
                }
                if (this.type !== 'holte') {
                    className = this.setClassName(
                            className,
                            this.type
                        );
                }
                // 五一提前订特殊样式
                const today = new Date();
                if (today < +new Date(this.mayDate)) {
                    if (
                        specailText === '五' ||
                        specailText === '一' ||
                        specailText === '提' ||
                        specailText === '前' ||
                        specailText === '订'
                    ) {
                        className = this.setClassName(
                            className,
                            'wuyi_special'
                        );
                    }
                    if (specailText === '五') {
                        className = this.setClassName(
                            className,
                            'wuyi_special_w'
                        );
                    }
                    if (specailText === '提') {
                        className = this.setClassName(
                            className,
                            'wuyi_special_t'
                        );
                    }
                    if (specailText === '前') {
                        className = this.setClassName(
                            className,
                            'wuyi_special_q'
                        );
                    }
                    if (specailText === '订') {
                        className = this.setClassName(
                            className,
                            'wuyi_special_d'
                        );
                    }
                }
                // 是凌晨 0- 6点
                if (this.time.isDawn) {
                    // 同年同月
                    if (this.startDate.year === dayObj.year && this.startDate.month === dayObj.month) {
                        if (text === this.startDate.day) {
                            text = text + 1 > dayNum ? 1 : text + 1;
                            specailText = '今天凌晨';
                        }
                        if (text === this.startDate.day + 1) {
                            if (this.holidayList[today.getMonth()][today.getDate()] === '今天') {
                                this.holidayList[today.getMonth()][today.getDate()] = '今天中午';
                            }
                        }
                    }
                }

                return {
                    date: tdIndex - firstDay,
                    className: className,
                    text: text,
                    specailText: specailText
                };
            }
        },
        showToast(text, delay, isGoback) {
            if (this.type !== 'hotel') {
                return;
            }
            clearTimeout(this.timer);
            this.toastText = text;

            this.timer = setTimeout(() => {
                this.toastText = '';
                if (isGoback) {
                    this.$emit('dateSelect', {
                        setSt: this.formatDate(
                            this.selectStart.year,
                            this.selectStart.month,
                            this.selectStart.day
                        ),
                        setEt: this.singleCheck ? '' : this.formatDate(
                            this.selectEnd.year,
                            this.selectEnd.month,
                            this.selectEnd.day
                        )
                    });
                }
            }, delay);
        },
        goBack() {
            // 入住时间和离店时间选择后跳转酒店检索页
            if (this.hasSelected || this.singleCheck) {
                this.$emit('dateSelect', {
                    setSt: this.formatDate(
                        this.selectStart.year,
                        this.selectStart.month,
                        this.selectStart.day
                    ),
                    setEt: this.singleCheck ? '' : this.formatDate(
                        this.selectEnd.year,
                        this.selectEnd.month,
                        this.selectEnd.day
                    )
                });
            } else {
                this.showToast('请选择离店日期', 2000);
            }
        },
        // 日期选择
        selectDate(dayObj, showObj) {
            if (showObj.className.indexOf('disable') > -1 || !showObj.date) {
                // 不可选日期
                return false;
            }
            // 如果入住和离店已选择，再次点击重新选择日期
            if (this.hasSelected) {
                this.selectStart = {};
                this.selectEnd = {};
            }
            let dayBetweenFirst = 0;
            // 点击日期
            let formatDayObj = this.formatDate(
                dayObj.year,
                dayObj.month,
                showObj.date
            );
            // 选中日期
            let formatSelectStart = this.formatDate(
                this.selectStart.year,
                this.selectStart.month,
                this.selectStart.day
            );
            let formatSelectEnd = this.formatDate(
                this.selectEnd.year,
                this.selectEnd.month,
                this.selectEnd.day
            );
            if (!this.isSelected || !this.selectStart.year) {
                this.selectStart = {
                    year: dayObj.year,
                    month: dayObj.month,
                    day: showObj.date
                };
                this.selectEnd = {};
                // 单选时返回
                if (this.singleCheck) {
                    return;
                }
                this.isSelected = true;
                this.hasSelected = false;
                this.showToast('请选择离店日期', 2000);
            } else if (this.selectStart.year) {
                this.hasSelected = true;
                dayBetweenFirst = this.dayCount(
                    formatSelectStart,
                    formatDayObj
                );

                if (dayBetweenFirst < 0) {
                    // 点击早于入住日期的日期时间，则用户重新选择该时间作为入住日期
                    this.selectStart = {
                        year: dayObj.year,
                        month: dayObj.month,
                        day: showObj.date
                    };
                    if (this.selectEnd.year) {
                        this.dayNum = this.dayCount(formatDayObj, formatSelectEnd);
                    } else {
                        this.hasSelected = false;
                        this.showToast('请选择离店日期', 2000);
                    }
                }
                if (dayBetweenFirst === 0) {
                    // 再次点击入住日期，则取消当前入住日期选择
                    this.selectStart = {};
                    this.selectEnd = {};
                    this.hasSelected = false;
                    this.showToast('请选择入住日期', 2000);
                }
                if (dayBetweenFirst > 0) {
                    // 点击晚于入住日期的日期时间，表示用户选择离店日期
                    this.selectEnd = {
                        year: dayObj.year,
                        month: dayObj.month,
                        day: showObj.date
                    };
                    if (dayBetweenFirst > 28) {
                        this.isSelected = false;
                        this.hasSelected = false;
                        this.showToast('超过28晚，请分订单提交', 3000);
                    } else {
                        this.dayNum = dayBetweenFirst;
                    }
                }
            }
        },
        handleScroll() {
            // 滑动高度
            let scrollHeight =
                document.documentElement.scrollTop ||
                window.pageYOffset ||
                document.body.scrollTop;
            if (scrollHeight > 20) {
                this.supportSticky = true;
            } else {
                this.supportSticky = false;
            }
            // 比较值
            let referList = document.getElementsByClassName('calendar-wrapper');
            let titleList = document.getElementsByClassName('calendar-title');
            if (referList.length && titleList.length) {
                let referFirst = referList[0].offsetTop + titleList[0].offsetHeight;
                let referLength = referList.length;
                for (let i = 0; i < referLength; i++) {
                    if (
                        scrollHeight >= referList[i].offsetTop - referFirst &&
                        scrollHeight < referList[i + 1].offsetTop - referFirst &&
                        this.fixedNav !== titleList[i].innerText
                    ) {
                        this.fixedNav = titleList[i].innerText;
                    }
                }
            }
        }
    }
};
</script>
<style lang="scss" scoped>
$baseSize: 75;
$baseWidth: 750;

.top-space {
    height: 88px;
    background-color:#fff;
    background-color: var(--BG51, #fff);
    overflow: hidden;
    position: relative;
    z-index: 10;
}
.calendar-nav {
    position: fixed;
    width: 100%;
    left: 0;
    text-align: center;
    z-index: 6;

    &-lui {
        margin-top: 160px;
    }

    .week-wrap {
        display: -webkit-box;
        -webkit-box-pack: center;
        height: 108px;
        line-height: 111px;
        font-size: 24px;
        color: #000;
        background: #fff;
        background: var(--BG51, #fff);
        border-bottom: 12px solid #f7f7fa;
        border-bottom: 12px solid var(--BG77, #f7f7fa);
        li {
            width: 13.6%;
            color: #11141a;
            color: var(--L11, #11141a);
            &:first-child,
            &:last-child {
                color: #3377ff;
            }
        }
    }
    .scroll-wrap {
        border: none;
        height: 98px;
        line-height: 111px;
        // box-shadow: 0 4px 24px -4px rgba(20,37,102,0.04);
    }
    .month-title {
        height: 94px;
        line-height: 94px;
        font-size: 34px;
        background: #fff;
    }
}

.calendar-container {
    padding-left: 40px;
    padding-right: 40px;
    background: #fff;
    background: var(--BG51, #fff);
    text-align: center;
    font-size: 34px;
    padding-top: 106px;
    padding-bottom: 128px;
    .calendar-wrapper {
        padding-bottom: 27px;
        padding-top: 22px;
        border-bottom: 1px solid #e9ebf0;
        border-bottom: 1px solid var(--SL221, #e9ebf0);
    }
    .calendar-title {
        // position: -webkit-sticky;
        // position: sticky;
        top: 70px;
        height: 88px;
        line-height: 88px;
        color:#333;
        color: var(--L11, #333);
        z-index: 1;
        font-size: 36px;
        letter-spacing: 0.56px;
        font-family: PingFangSC-Medium;
    }
    .calendar-box {
        width: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: normal;
        margin-top: 6px;
        td {
            width: 1/7 * 100%;
            &:first-child,
            &:last-child {
                color: #3973f6;
                color: var(--L41, #3973f6);
            }
        }
        span {
            position: relative;
            display: inline-block;
            /*用于解决plus上span之间存在空隙的问题*/
            width: 101%;
            border: 0;
            // vertical-align: bottom;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 110px;
            margin-bottom: 7px;
            color: #11141a;
            color: var(--L11,  #11141a);
            font-family: PingFangSC-Medium;
            font-size: 30px;
            &.disable {
                color:  #999;
                color: var(--L32, #999);
            }
            &.select {
                color: #11141a;
                color: var(--L11,  #11141a);
                background: var(--BT11);
            }
            &.between {
                width: 100%!important;
                background: rgba(51, 119, 255, 0.1);
                background-image: none!important;
                border: none!important;
                border-radius: 0!important;
            }
            &.special {
                /*用于解决plus上span之间存在空隙的问题*/
                width: 101%;
                &:after {
                    position: absolute;
                    bottom: 4px;
                    left: 0;
                    width: 100%;
                    font-size: 20px;
                    color: #3377ff;
                    color: var(--BT11, #3377ff);
                    font-family: PingFangSC;
                    content: attr(content);
                }
            }
            &.wuyi_special {
                background-image: linear-gradient(213deg, #FFFAF7 0%, #FFF3EB 100%);
                border: 2px solid rgba(255,238,230,1);
                border-radius: 10px;
                &::after {
                    font-family: PingFangSC-Medium;
                    font-size: 22px;
                    color: #ff540f;
                    letter-spacing: 1px;
                    font-weight: 500;
                }
            }

            &.wuyi_special_w {
                width: 98%;
            }
            &.wuyi_special_t {
                background-image: linear-gradient(213deg, #FFFAF7 0%, #FFF3EB 100%);
                border: none;
                border-top: 2px solid rgba(255,238,230,1);
                border-left: 2px solid rgba(255,238,230,1);
                border-bottom: 2px solid rgba(255,238,230,1);
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                width: 106%;
                &::after {
                    font-family: PingFangSC-Medium;
                    font-size: 22px;
                    color: #FF540F;
                    letter-spacing: 1px;
                    font-weight: 500;
                }
            }
            &.wuyi_special_q {
                border: none;
                border-top: 2px solid rgba(255,238,230,1);
                border-left: none;
                border-bottom: 2px solid rgba(255,238,230,1);
                border-radius: 0;
                width: 106%;
            }
            &.wuyi_special_d {
                border: none;
                border-top: 2px solid rgba(255,238,230,1);
                border-right: 2px solid rgba(255,238,230,1);
                border-bottom: 2px solid rgba(255,238,230,1);
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            &.special-first {
                background-image: linear-gradient(90deg, #3377FF 0%, #4090ff 100%)!important;
                /*用于解决plus上span之间存在空隙的问题*/
                width: 101%;
            }
            &.special-last {
                background-image: linear-gradient(90deg, #4090ff 0%, #4EA9FF 100%)!important;
            }
            &.disable-special {
                color: #999;
                color: var(--L32, #999);
                &:after {
                    position: absolute;
                    bottom: 4px;
                    font-size: 20px;
                    left: 0;
                    width: 100%;
                    font-family: PingFangSC;
                    content: attr(content);
                }
            }
            &.first:before,
            &.last:before {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 46px;
                line-height: 46px;
                font-size: 24px;
                -webkit-transform: scale((18/24));
                transform: scale(0.9);
                color: rgba(255, 255, 255, 0.87);
            }
            &.first {
                color: rgba(255, 255, 255, 0.87);
                background-image: linear-gradient(90deg, #3377FF 0%, #4EA9FF 100%);
                border-radius: 16px 0 0 16px;
                &:before {
                    content: '入住';
                }
                &:after {
                    position: absolute;
                    bottom: 7px;
                    left: 0;
                    width: 100%;
                    font-size: 20px;
                    font-family: PingFangSC;
                    color: rgba(255, 255, 255, 0.87);
                    content: attr(content);
                }
            }
            &.single {
                border-radius: 16px;
            }
            &.ticket {
                &::before {
                    content: '';
                }
            }
            &.traffic {
                &::before {
                    content: '';
                }
            }
            &.last {
                color: rgba(255, 255, 255, 0.87);
                background-image: linear-gradient(90deg, #3377FF 0%, #4EA9FF 100%);
                border-radius: 0 16px 16px 0;
                &:before {
                    content: '离店';
                }
                &:after {
                    position: absolute;
                    bottom: 7px;
                    left: 0;
                    width: 100%;
                    font-size: 20px;
                    font-family: PingFangSC;
                    color: rgba(255, 255, 255, 0.87);
                    content: attr(content);
                }
            }
        }
        @media (prefers-color-scheme: dark) {
            span {
                &.first,
                &.last {
                    background-image: linear-gradient(90deg, rgba(57,115,230,0.98) 0%, #1F78CC 100%)!important;
                    border: none!important;
                }
                &.between {
                    background: rgba(57, 115, 246, 0.10)!important;
                    background-image: none!important;
                    border: none!important;
                    border-radius: 0!important;
                }
                &.special-first {
                    background-image: linear-gradient(90deg, #3973e6, #2B74D7)!important;
                }
                &.special-last {
                    background-image: linear-gradient(90deg, #2B74D7, #1f78cc)!important;
                }
                &.wuyi_special {
                    // background-image: none!important;
                    background: #4A3A31;
                    border: 2px solid rgba(255,190,174,0.2);
                }
                &.wuyi_special_t {
                    background-image: none;
                    background: #4A3A31;
                    border: none;
                    border-top: 2px solid rgba(255,190,174,0.2);;
                    border-left: 2px solid rgba(255,190,174,0.2);;
                    border-bottom: 2px solid rgba(255,190,174,0.2);;
                    width: 106%;
                }
                &.wuyi_special_q {
                    border: none;
                    border-top: 2px solid rgba(255,190,174,0.2);
                    border-left: none;
                    border-bottom: 2px solid rgba(255,190,174,0.2);
                    width: 106%;
                }
                &.wuyi_special_d {
                    border: none;
                    border-top: 2px solid rgba(255,190,174,0.2);
                    border-right: 2px solid rgba(255,190,174,0.2);
                    border-bottom: 2px solid rgba(255,190,174,0.2);
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                }
            }
        }
        @media (max-width: 375px) {
            span {
                width: 100%;
            }
        }
    }
}
.btn-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 128px;
    background: #fff;
    transform: translateZ(1px);
    background: var(--BG61, #fff);
    z-index: 999;
    box-shadow: 0 -4px 24px -4px rgba(20,37,102,0.04);
    text-align: center;
}
@media (prefers-color-scheme: dark) {
    .btn-container {
        background-image: linear-gradient(0deg, #333333 53%, rgba(51,51,51,0.92) 100%);
        box-shadow: 0 4px 12px -4px var(--BG13);
    }
}
.day-num {
    position: absolute;
    bottom: 0 !important;
    top: 0;
    margin: auto;
    left: 5%;
    width: 90%;
    height: 84px;
    background-image: linear-gradient(90deg, #3377FF 0%, #4EA9FF 100%);
    border-radius: 42px;
    box-shadow: 0 4px 16px 0 rgba(51,119,255,0.32);
    font-family: PingFangSC-Medium;
    font-size: 30px;
    color: #fff;
    letter-spacing: 1px;
    font-weight: 500;
    z-index: 999;
    margin-bottom: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.disable-num {
    background-image: linear-gradient(90deg, #85aeff 0%, #95ccff 100%);
}
@media (prefers-color-scheme: dark) {
    .day-num {
        background-image: linear-gradient(90deg, rgba(57,115,230,0.98) 0%, #1F78CC 100%);
        box-shadow: 0 4px 16px 0 rgba(51,119,255,0.32);
    }
    .disable-num {
        background-image: linear-gradient(90deg, #37599d 0%,#275c8f 100%);
    }
}
@supports (bottom: env(safe-area-inset-bottom)) {
    .btn-container,
    .day-num {
        bottom: env(safe-area-inset-bottom); // 这里是重点
        &:after {
            content: '';
            height: env(safe-area-inset-bottom); // 这里是重点
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--BG61);
        }
    }
    .day-num {
        &:after {
            top: 120%;
        }
    }
}
.calendar-toast {
    position: absolute;
    top: -120px;
    left: 50%;
    max-width: 453px;
    padding: 0 24px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 28px;
    font-family: PingFangSC-Regular;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 6;
}
</style>