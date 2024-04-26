<!--
 * @file: 城市选择页面
 * @author: Lv Mengmeng <lvmengmeng@baidu.com>
-->
<template>
    <div>
        <div v-if="luiFlag" class="citysel-title">
                <div class="citysel-title-icon" @click="luiBackHandler"></div>
                <span class="citysel-title-text">选择城市</span>
            </div>
        <section
            class="citysel-wrap -iphoneX-padding-bottom"
            @scroll="scrollHander"
        >
            <div v-if="$route.query.from === 'h5-hotel'" class="top-space"></div>
            <search-com
                placeholder="输入城市名称"
                :list="associateList"
                @input="searchInput"
                @select="getCityCodeByName"
            ></search-com>
            <current-location
                title="当前位置"
                :list="
                    $route.query.from === 'h5-hotel'
                        ? locationInfo.realpositionObj
                        : currentLocation
                "
                @select="selectCity"
            ></current-location>
            <hot-item
                v-if="locationInfo.historyList.length > 0"
                title="访问历史"
                id="历史"
                :list="locationInfo.historyList"
                @select="selectCity"
            ></hot-item>
            <hot-item
                title="热门城市"
                id="热门"
                :list="cityObj.hotCityData"
                @select="selectCity"
            ></hot-item>
            <list
                ref="navList"
                :city-list="cityObj.cityData"
                :index-list="cityObj.letter"
                @select="selectCity"
            ></list>
        </section>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import CurrentLocation from './components/current';
import hotItem from './components/hot';
import list from './components/list';
import internal from '../common/config/data/citydata.json';
import international from '../common/config/data/international_citydata.json';
import searchCom from '../common/search';
// import { getEnvInfo as ServiceGetEnvInfo } from '@common/services/service/index.js';
import Location from '../common/js/location';
import { getUrlParams } from '@common/libs/js/util/util_url';
import { createIframe } from '@common/services/shells/common.js';
import jssdk from '../common/js/jssdk';

export default {
    data() {
        return {
            cityObj: {},
            // 当前位置数据
            currentLocation: {},
            luiFlag: false,
            sceneName: '' // 场景名称，用于指定GlobalMessage接收场景
        };
    },
    components: {
        searchCom,
        CurrentLocation,
        hotItem,
        list
    },
    created() {
        document.title = '选择城市';
        const urlParams = getUrlParams() || {};

        if (urlParams.talos_from === 'lui_search') {
            // 通知NA页面已ready
            jssdk.getPoiDataByNA();
            this.luiFlag = true;

            // 为了兼容历史逻辑 scene_name默认为SubFilterMask，其他场景使用要传入场景唯一的名称 便于GlobalMessage区分
            this.sceneName = urlParams.scene_name || 'SubFilterMask';

            // 获取当前位置信息
            jssdk.getLocationInfo((info) => {
                if (info && typeof info === 'string') {
                    info = JSON.parse(info);
                    this.currentLocation = {
                        cityName: info.province || '',
                        cityCode: info.cityId || ''
                    };
                }
            });
        }

        // 获取大陆或国际港澳台列表
        this.cityObj = this.tabInfo.index === 0 ? internal : international;
        // 如果参数中有loc，根据当前经纬度获取当前位置
        if (urlParams.loc) {
            let locInfo = decodeURIComponent(urlParams.loc);
            const posiData = {
                lng: locInfo.split(',')[0].replace('(', ''),
                lat: locInfo.split(',')[1].replace(')', '')
            };
            let posi = Location.getMCLocation(posiData);
            posi.then(res => {
                this.currentLocation = res.data;
            });
        }
        // 获取历史搜索城市
        this.$bridge.LocalStorage.getItem('cityHistoryQuery').then(res => {
            if (res && res !== '{}') {
                this.setLocation({
                    type: 'historyList',
                    list: eval('(' + JSON.parse(res) + ')')
                });
            }
        });
        // 获取环境信息
        // ServiceGetEnvInfo();
    },
    mounted() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    computed: {
        ...mapGetters('channel', [
            'associateList',
            'locationInfo',
            'tabInfo',
            'urlData'
        ])
    },
    methods: {
        // 遍历的列表的点击
        selectCity(item) {
            // 判断来源（h5-hotel 表示从酒店频道页跳转）
            let from = (this.$route.query || {}).from;
            const { talos_from = '' } = getUrlParams() || {};
            // 酒店动态检索页
            if (from === 'h5-hotel') {
                this.setLocation({
                    type: 'searchObj',
                    ...item
                });

                this.setLocation({
                    type: 'curPositionObj',
                    ...item
                });
                this.getMainData(item.cityCode);
                // 每次选择完城市之后清空商圈
                this.saveChannelUrlData({
                    word: '酒店'
                });

                this.pageBack();
            } else if (this.luiFlag) {
                // 来自大模型
                const content = {
                    type: 'selCity',
                    selCity: item || {}
                };
                jssdk.sendGlobalMessage({
                    name: this.sceneName,
                    content,
                });
            } else {
                this.setLocation({
                    type: 'searchObj',
                    ...item
                });
                let url = 'bdapi://hotelchoose?type=1&city_code=' + item.cityCode;
                createIframe(url);
            }
        },
        searchInput(val) {
            this.search(val);
        },
        scrollHander() {
            this.$refs.navList.onScroll();
        },
        ...mapActions('channel', [
            'getAssociate',
            'getCityCode',
            'getMainData'
        ]),
        getCityCodeByName(val) {
            if (typeof val === 'string') {
                let name = val.replace(/市|县$/, '');
                let self = this;
                if (name) {
                    // 判断来源（h5-hotel 表示从酒店频道页跳转）
                    let from = (this.$route.query || {}).from;
                    if (from === 'h5-hotel') {
                        this.getCityCode({
                            cityName: name,
                            callback: res => {
                                const cityInfo = {
                                    cityName: res.content.cname,
                                    cityCode: res.content.code
                                };
                                self.getMainData(res.content.code);
                                self.setLocation({
                                    type: 'curPositionObj',
                                    ...cityInfo
                                });
                                self.saveChannelUrlData({
                                    word: '酒店'
                                });
                                self.pageBack();
                            }
                        });
                    }
                } else {
                    this.getCityCode({
                        cityName: name,
                        callback: res => {
                            let url = 'bdapi://hotelchoose?type=1&city_code=' + res.content.code;
                            createIframe(url);
                        }
                    });
                }
            } else {
                this.selectCity(val);
            }
        },
        ...mapMutations('channel', [
            'setLocation',
            'getAssociateList',
            'saveChannelUrlData'
        ]),
        /**
         * 城市搜索
         * @param {string} val
         */
        search(val) {
            if (!val) {
                this.getAssociateList([]);
                return false;
            }
            let reg = /[a-zA-Z]/;
            let list = [];
            let initial = val.charAt(0);
            if (reg.test(initial)) {
                if (this.tabInfo.index === 0) {
                    return;
                }
                // 如果是字母
                list = international.cityData[
                    initial.toLocaleUpperCase()
                ].filter(item => {
                    return item.py.indexOf(val) === 0;
                });
            } else {
                // 如果是文字
                let tempList = [];
                let searchCityData = this.tabInfo.index === 0 ? internal : international;
                searchCityData.letter.forEach(letters => {
                    tempList = searchCityData.cityData[letters].filter(item => {
                        return item.cityName.indexOf(val) > -1;
                    });
                    list.push(...tempList);
                });
            }
            this.getAssociateList(list);
        },
        pageBack() {
            window.history.back();
        },
        luiBackHandler() {
            const content = {
                type: 'closeH5',
            };
            jssdk.sendGlobalMessage({
                name: this.sceneName,
                content,
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.citysel-title {
    width: 100%;
    height: 160px;
    background-color: #fff;
    background-color: var(--BG51, #fff);
    padding-top: 100px;
    display: flex;
    justify-content: center;
    position: relative;

    &-icon {
        width: 48px;
        height: 48px;
        background-image: url(https://map-mobile-resource.cdn.bcebos.com/icon/rec/system-common/default/arrow-left-2.png);
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 98px;
        left: 20px;
    }

    &-text {
        font-family: PingFangSC-Medium;
        font-size: 32px;
        color: #11141a;
        color: var(--L11, #11141a);
        line-height: 32px;
        font-weight: 500;
    }
}
.citysel-wrap {
    padding-right: 40px;
    padding-top: 30px;
    background-color: #fff;
    background-color: var(--BG51, #fff);
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    height: 100vh;
    .top-space {
        height: 86px;
        background-color: #fff;
        background-color: var(--BG51, #fff);
    }
}
[data-theme="dark"] .citysel-title-icon {
    background-image: url(https://map-mobile-resource.cdn.bcebos.com/icon/rec/system-common/dark/arrow-left-dark-2.png);
}
</style>
