<template>
    <div class="discountsBar">
       <userBar>
           <template slot="title">
               <router-link to="/User" class="title">
                   <span>我的财富</span>
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
        name: "discountsBar",
        components:{userBar},
        data(){
            return{
                userMsgList:[{
                    id:1,
                    link:"/User",
                    icon:"&#xe610;",
                    text:"现金"
                },{
                    id:2,
                    link:"/User",
                    icon:"&#xe614;",
                    text:"红包"
                },{
                    id:3,
                    link:"/User",
                    icon:"&#xe617;",
                    text:"礼品卡"
                },{
                    id:4,
                    link:"/User",
                    icon:"&#xe645;",
                    text:"积分"
                }]
            }
        }
    }
</script>

<style scoped>
    .discountsBar{
        background-color: #fff;
    }
    .discountsBar .userBar ul li{
        width: 25%;
    }
</style>
