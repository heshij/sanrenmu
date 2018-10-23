<template>
    <div class="MenuBar">
        <ul>
            <li v-for="item of menuBarList" :key="item.id">
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
        name: "MenuBar",
        data(){
            return{
                menuBarList:[{
                    id:1,
                    link:"/",
                    icon:"&#xe634;",
                    text:"首页"
                },{
                    id:2,
                    link:"/Search",
                    icon:"&#xe62b;",
                    text:"搜索"
                },{
                    id:3,
                    link:"/Classify",
                    icon:"&#xe72b;",
                    text:"分类"
                },{
                    id:4,
                    link:"/ShopCar",
                    icon:"&#xe656;",
                    text:"购物车"
                },{
                    id:5,
                    link:"/User",
                    icon:"&#xe619;",
                    text:"我"
                }]
            }
        }
    }
</script>
<style scoped>
    .MenuBar {
        position: fixed;
        width: 100%;
        height: 100px;
        bottom: 0;
    }

    .MenuBar ul {
        width: inherit;
        height: inherit;
        display: flex;
    }

    .MenuBar ul li {
        width: 25%;
        height: inherit;
    }

    .MenuBar ul li a {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .MenuBar ul li a .iconfont {
        font-size: 38px;
    }

    .MenuBar ul li a .text {
        font-size: 24px;
    }

    .MenuBar ul li a span {
        display: block;
        margin: 7px 0;
    }

    .MenuBar ul li .router-link-exact-active span {
        color: #087ccd;
    }
</style>
