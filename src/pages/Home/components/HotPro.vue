<template>
    <div class="hotPro">
        <ul>
            <li>
                <div class="image">
                    <img src="../../.././images/home/hot03.jpg" alt="">
                </div>
                <div class="progressBarWrap">
                    <div class="progressBar">
                        <span>抢购进行中4:55:25</span>
                        <div class="blue"></div>
                    </div>
                    <div class="bottom">
                        <div class="price">
                            <span>￥59.0</span>
                            <s>￥89.0</s>
                        </div>
                        <i></i>
                    </div>
                </div>
            </li>
            <li>
                <div class="image">
                    <img src="../../.././images/home/hot01.jpg" alt="">
                </div>
                <div class="progressBarWrap">
                    <div class="progressBar">
                        <span>抢购进行中4:55:25</span>
                        <div class="blue"></div>
                    </div>
                    <div class="bottom">
                        <div class="price">
                            <span>￥59.0</span>
                            <s>￥89.0</s>
                        </div>
                        <i></i>
                    </div>
                </div>
            </li>
            <li>
                <div class="image">
                    <img src="../../.././images/home/hot02.jpg" alt="">
                </div>
                <div class="progressBarWrap">
                    <div class="progressBar">
                        <span>抢购进行中4:55:25</span>
                        <div class="blue"></div>
                    </div>
                    <div class="bottom">
                        <div class="price">
                            <span>￥59.0</span>
                            <s>￥89.0</s>
                        </div>
                        <i></i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HotPro"
    }
</script>

<style scoped>
    .hotPro{
        width: 680px;
        height: auto;
        margin: 0 35px;
    }
    .hotPro ul{
        width: 100%;
        background-color: #fff;
        padding-bottom: 10px;
    }
    .hotPro ul li{
        width: inherit;
        height: 168px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .hotPro ul li .image{
        width: 227px;
        position: relative;
        /*padding-bottom: 100%;*/
    }
    .hotPro ul li .image img{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
    }
    .hotPro ul li .progressBarWrap{
        width: 408px;
        height: inherit;
        background-color: #ffffff;
        padding-top: 50px;
        box-sizing: border-box;
    }
    .hotPro ul li .progressBarWrap .progressBar{
        width: 376px;
        height: 50px;
        background-color: #efebeb;
        border-radius: 25px;
        text-align: center;
        line-height: 50px;
        position: relative;
        margin-bottom: 12px;
    }
    .hotPro ul li .progressBarWrap .progressBar span{
        position: relative;
        z-index: 99;
        font-size: 20px;
        color: #ffffff;
    }
    .hotPro ul li .progressBarWrap .progressBar .blue{
        width: 270px;
        height: 50px;
        border-radius: 25px;
        background-color: #087ccd;
        position: absolute;
        top: 0;
        left: 0;
    }
    .hotPro ul li .progressBarWrap .bottom{
        width: 376px;
        height: 56px;
        display: flex;
        justify-content: space-between;
        padding-left: 68px;
        padding-right: 30px;
        box-sizing: border-box;
    }
    .hotPro ul li .progressBarWrap .bottom .price{
        display: flex;
        justify-content: space-between;
        line-height: 30px;
    }
    .hotPro ul li .progressBarWrap .bottom .price span{
        font-size: 20px;
        color: #087ccd;
        padding-right: 5px;
    }
    .hotPro ul li .progressBarWrap .bottom .price s{
        font-size: 20px;
        color: #aeadad;
    }
    .hotPro ul li .progressBarWrap .bottom i{
        display: block;
        width: 30px;
        height: 30px;
        background: url("../../.././images/home/down.png") no-repeat;
        background-size: 30px;
    }
</style>