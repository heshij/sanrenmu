<template>
    <div class="orderBar">
        <userBar>
            <template slot="title">
                <router-link to="/User" class="title">
                    <span>我的订单</span>
                    <i class="iconfont">&#xe619;</i>
                </router-link>
            </template>
            <template slot="barMain">
                <ul>
                    <li v-for="item of userMsgList" :key="item.id">
                        <router-link :to="item.link">
                            <span class="iconfont" v-html="item.icon"></span>
                            <span class="text">{{item.text}}</span>
                        </router-link>
                    </li>
                </ul>
            </template>
        </userBar>
    </div>
</template>

<script>
    import userBar from './userBar'
    export default {
        name: "orderBar",
        components:{userBar},
        data(){
            return{
                userMsgList:[{
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
                }]
            }
        }
    }
</script>

<style scoped>
    .orderBar{
        background-color: #fff;
    }
</style>
