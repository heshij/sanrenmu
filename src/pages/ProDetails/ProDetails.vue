<template>
    <div class="ProDetails">
        <details-header></details-header>
        <div class="proTitleTab">
            <ul>
                <li
                        v-for="(item,index) of proTitleTab"
                        :key="index"
                        :class="{on : index === active}"
                        @click="toActive(index)"
                >
                    <router-link :to="item.url">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="tab-com">
            <router-view></router-view>
        </div>
        <div class="buyMenu">
            <div class="left">
                <ul>
                    <li v-for="item of detailsMenuBarList" :key="item.id">
                        <router-link :to="item.link">
                            <span class="iconfont" v-html="item.icon"></span>
                            <span class="text">{{item.text}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="right">
                <button class="shopCar" >加入购物车</button>
                <button class="buy">立即购买</button>
            </div>
        </div>
    </div>
</template>

<script>
    import detailsHeader from './components/detailsHeader'
    import detailsImg from './components/detailsImg'
    import proAssess from './components/proAssess'
    import ProDetailsMain from "./components/proDetailsMain";

    export default {
        name: "ProDetails",
        components: {
            ProDetailsMain,
            detailsHeader,
            detailsImg,
            proAssess
        },
        data() {
            return {
                active: 0,
                detailsMenuBarList:[{
                    id:1,
                    link:"/",
                    icon:"&#xe634;",
                    text:"客服"
                },{
                    id:2,
                    link:"/Search",
                    icon:"&#xe62b;",
                    text:"进店"
                }],
                proTitleTab: [
                    {
                        title: "商品",
                        url:"/ProDetails"
                    },
                    {
                        title: "详情",
                        url:"/ProDetails/detailsImg"
                    },
                    {
                        title: "评价",
                        url:"/ProDetails/proAssess"
                    }
                ]
            }
        },
        methods: {
            toActive(index) {
                this.active = index;
            }
        }

    }
</script>

<style scoped>
    .ProDetails {
        padding-top: 96px;
        position: relative;
        padding-bottom: 96px;
    }

    .ProDetails .proTitleTab {
        width: 100%;
        height: 96px;
        margin-left: 30px;
    }

    .ProDetails .proTitleTab ul {
        width: 336px;
        height: inherit;
        display: flex;
        justify-content: space-around;
        line-height: 96px;
        text-align: center;
    }

    .ProDetails .proTitleTab ul li {
        width: 112px;
    }

    .ProDetails .proTitleTab ul li a {
        font-size: 26px;
        font-family: "锐字云字库细圆体1.0", serif;
        color: #a3a3a3;
    }

    .ProDetails .proTitleTab ul .on {
        border-bottom: 6px solid #087ccd;
        box-sizing: border-box;
    }

    .ProDetails .proTitleTab ul .on a {
        color: #087ccd;
    }
    .ProDetails .buyMenu{
        position: fixed;
        bottom: 0;
        z-index: 99;
        width: 100%;
        height: 96px;
        display: flex;
        justify-content: space-around;
        padding: 0 10px;
        background-color: #fff;
    }
    .ProDetails .buyMenu .left ul{
        height: 100%;
        display: flex;
    }
    .ProDetails .buyMenu .left ul li a{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
    }
    .ProDetails .buyMenu .left ul li a span{
        margin-bottom: 6px;
    }
    .ProDetails .buyMenu .right{
        width: auto;
        height: 100%;
        line-height: 96px;
    }
    .ProDetails .buyMenu .right button{
        width: 248px;
        height: 86px;
        border: 4px solid #087ccd;
        box-sizing: border-box;
        background-color: #fff;
        color: #087ccd;
        font-size: 30px;
        margin-left: 20px;
        border-radius: 10px;
    }
</style>
