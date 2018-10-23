<template>
    <div class="other">
        <ul>
            <li v-for="item of listDate" :key="item.id">
                <router-link to="/">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.itemTitle}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "other",
        data(){
            return{
                listDate:[{
                    id:1,
                    icon:'&#xe615;',
                    itemTitle:"更多"
                },{
                    id:2,
                    icon:"&#xe627;",
                    itemTitle:"二维码支付"
                },{
                    id:3,
                    icon:"&#xe601;",
                    itemTitle:"优惠券 "
                },{
                    id:4,
                    icon:"&#xe673;",
                    itemTitle:"我的钱包"
                }]
            }
        }
    }
</script>

<style scoped>
    .other {
        width: 750px;
        height: 176px;
        margin: 0 35px;
    }
    .other ul{
        width: 680px;
        height: 176px;
        display: flex;
        justify-content: space-around;
        background: url("../../.././images/home/home_bg.png") no-repeat 0 -176px;
        margin-top: 5px;
    }
    .other ul li {
        width: 25%;
        height: inherit;
    }
    .other ul li a{
        height: 100%;
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        padding-top: 12px;
        box-sizing: border-box;
    }
    .other ul li i{
        width: 111px;
        height: 111px;
        border-radius: 50%;
        border: 1px solid #1885d0;
        line-height: 111px;
        text-align: center;
        font-size: 52px;
    }
    .other ul li .iconfont:nth-child(1){
        color: #087ccd;
    }
    .other ul li .iconfont:nth-child(2){
        color: #08cdb8;
    }
    .other ul li .iconfont:nth-child(3){
        color: #087ccd;
    }
    .other ul li .iconfont:nth-child(4){
        color: #08cdb8;
    }
    .other ul li span{
        font-size: 24px;
        color: #646262;
        padding-top: 12px;
        box-sizing: border-box;
    }
</style>