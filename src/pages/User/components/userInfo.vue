<template>
    <div class="userInfo">
        <div class="userHeader">
            <div class="userImage">
                <img src="../../.././images/user/userCat.png" alt="">
            </div>
            <router-link to="/login">点击登录</router-link>
        </div>
        <div class="userMsg">
            <div class="userBg"></div>
            <ul>
                <li v-for="item of userMsgList" :key="item.id">
                    <router-link :to="item.link">
                        <span class="countBox">
                            <span class="iconfont" v-html="item.icon"></span>
                            <i class="count">{{num}}</i>
                        </span>
                        <span class="text">{{item.text}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "userInfo",
        data() {
            return {
                userMsgList: [{
                    id: 1,
                    link: "/User",
                    icon: "&#xe702;",
                    text: "收藏商品",
                    num: 0
                }, {
                    id: 2,
                    link: "/User",
                    icon: "&#xe650;",
                    text: "收藏店铺",
                }, {
                    id: 3,
                    link: "/User",
                    icon: "&#xe72b;",
                    text: "浏览记录",
                }, {
                    id: 4,
                    link: "/User",
                    icon: "&#xe623;",
                    text: "编辑资料",
                }]
            }
        },
        computed: {
            ...mapState(["num"])
        }
    }
</script>

<style scoped>
    .userInfo {
        width: 750px;
        height: 290px;
        background: url("../../.././images/user/user-bg.png");
        background-size: 100% auto;
        position: relative;

    }

    .userInfo .userHeader {
        width: 300px;
        height: 194px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .userInfo .userHeader .userImage {
        width: 87px;
        height: 87px;
        border-radius: 50%;
        background-color: skyblue;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

    .userInfo .userHeader .userImage img {
        width: 87px;
        height: 87px;
    }

    .userInfo .userHeader a {
        color: #ffffff;
        font-size: 28px;
        line-height: 40px;
        position: absolute;
        bottom: 0;
    }

    .userInfo .userMsg {
        width: inherit;
        height: 96px;
        position: relative;
    }

    .userInfo .userMsg .userBg {
        width: inherit;
        height: 96px;
        background: url("../../.././images/user/user-bg.png") -120px -20px;
        filter: blur(3px);
        position: absolute;
    }

    .userInfo .userMsg ul {
        width: inherit;
        height: inherit;
        display: flex;
        position: relative;
    }

    .userInfo .userMsg ul li {
        width: 25%;
        height: inherit;
    }

    .userInfo .userMsg ul li a {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 24px;
        line-height: 38px;
    }

    .countBox {
        position: relative;
    }

    .countBox i {
        display: none;
        position: absolute;
        width: 36px;
        height: 36px;
        top: -14px;
        right: -28px;
        background: #087ccd;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 36px;
        border-radius: 50%;
    }

    .userInfo .userMsg ul li:first-child a .countBox i {
        display: block;
    }
</style>
