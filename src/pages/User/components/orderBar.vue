<template>
    <div class="orderBar">
        <userBar>
            <template slot="title">
                <router-link to="/User" class="title">
                    <span>我的订单</span>
                    <i class="iconfont">&#xe62e;</i>
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
                    icon:"&#xe633;",
                    text:"待付款"
                },{
                    id:2,
                    link:"/User",
                    icon:"&#xe69e;",
                    text:"代发货"
                },{
                    id:3,
                    link:"/User",
                    icon:"&#xe616;",
                    text:"待收货"
                },{
                    id:4,
                    link:"/User",
                    icon:"&#xe60e;",
                    text:"待评价"
                },{
                    id:5,
                    link:"/User",
                    icon:"&#xe6cf;",
                    text:"退货退款"
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
