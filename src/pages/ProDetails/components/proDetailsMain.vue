<template>
    <div class="proDetailsMain">
        <banner></banner>
        <div class="title">
            <div class="left">
                <h2>三刃木4077折叠刀随身便携小刀水果刀银色脉动纹</h2>
                <span>￥255.00</span>
            </div>
            <div class="right">
                <span class="iconfont">&#xe619;</span>
                <span>收藏</span>
            </div>
        </div>
        <div class="info">
            <ul class="format">
                <li>
                    <router-link to="/ProDetails">
                        <span>请选择：规格/颜色</span>
                        <span class="iconfont">&#xe619;</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/ProDetails">
                        <ul>
                            <li>
                                <router-link to="/ProDetails">
                                    <span class="iconfont">&#xe619;</span>
                                    <span>自营正品</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/ProDetails">
                                    <span class="iconfont">&#xe619;</span>
                                    <span>自营正品</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/ProDetails">
                                    <span class="iconfont">&#xe619;</span>
                                    <span>自营正品</span>
                                </router-link>
                            </li>
                        </ul>
                        <span class="iconfont">&#xe619;</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/ProDetails">
                        <span>产品参数</span>
                        <span class="iconfont">&#xe619;</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <details-img></details-img>
    </div>
</template>

<script>
    import Banner from "./banner";
    import DetailsImg from "./detailsImg";
    export default {
        name: "proDetailsMain",
        components: {DetailsImg, Banner}
    }
</script>

<style scoped>
    .proDetailsMain{
        width: 750px;
        height: auto;
    }
    .proDetailsMain .title{
        width: inherit;
        height: 202px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
    }
    .proDetailsMain .title .left{
        width: auto;
        height: inherit;
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-items: left;
    }
    .proDetailsMain .title .left h2{
        width: 464px;
        line-height: 40px;
        font-size: 24px;
        color: #000;
        letter-spacing: 2px;
    }
    .proDetailsMain .title .left span{
        font-size: 36px;
        color: #087ccd;
        margin-top: 10px;
    }
    .proDetailsMain .title .right{
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-items: center;
    }
    .proDetailsMain .title .right span{
        display: block;
        text-align: center;
        color: #a3a3a3;
    }
    .proDetailsMain .title .right span:first-child{
        font-size: 38px;
        margin-bottom: 10px;
    }
    .proDetailsMain .title .right span:last-child{
        font-size: 24px;
    }
    .proDetailsMain .info{
        width: 750px;
        height: auto;
        margin-bottom: 200px;
    }
    .proDetailsMain .info .format{
        width: inherit;
        height: 96px;
    }
    .proDetailsMain .info .format > li{
        width: auto;
        height: 96px;
        line-height: 96px;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .proDetailsMain .info .format > li > a > span{
        font-size: 24px;
    }
    .proDetailsMain .info .format li ul{
        display: flex;
        justify-content: left;
    }
    .proDetailsMain .info .format li > a{
        display: flex;
        justify-content: space-between;
        font-size: 18px;
    }
</style>
