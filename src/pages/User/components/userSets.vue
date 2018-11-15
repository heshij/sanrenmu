<template>
    <div class="userSets">
        <ul>
            <li v-for="item of userSetsList" :key="item.id">
                <router-link :to="item.link">
                    <span class="iconfont" v-html="item.icon"></span>
                    <span class="text">{{item.text}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "userSets",
        data(){
            return{
                userSetsList:[{
                    id:1,
                    link:"/User",
                    icon:"&#xe634;",
                    text:"收藏商品"
                },{
                    id:2,
                    link:"/User",
                    icon:"&#xe634;",
                    text:"收藏店铺"
                },{
                    id:3,
                    link:"/User",
                    icon:"&#xe634;",
                    text:"浏览记录"
                },{
                    id:4,
                    link:"/User",
                    icon:"&#xe634;",
                    text:"编辑资料"
                },{
                    id:5,
                    link:"/User",
                    icon:"&#xe634;",
                    text:"收藏店铺"
                },{
                    id:6,
                    link:"/User",
                    icon:"&#xe634;",
                    text:"浏览记录"
                },{
                    id:7,
                    link:"/User",
                    icon:"&#xe634;",
                    text:"编辑资料"
                },{
                    id:8,
                    link:"/User",
                    icon:"&#xe634;",
                    text:"编辑资料"
                }]
            }
        }
    }
</script>

<style scoped>
    .userSets{
        width: 750px;
        height: 360px;
        background-color: #fff;
    }
    .userSets ul{
        width: inherit;
        height: inherit;
        display: flex;
        flex-wrap:wrap;
        position: relative;
    }
    .userSets ul li {
        width: 25%;
        height: 180px;
    }

    .userSets ul li a {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333333;
        font-size: 24px;
        line-height: 38px;
    }
    .userSets ul li a >>> span:first-child{
        width: 78px;
        height: 78px;
        line-height: 78px;
    }
    .userSets ul li a >>> span:last-child{
        font-size: 24px;
        line-height: 64px;
    }
    .userSets ul li a >>> .iconfont{
        font-size: 78px;
    }
</style>
