<template>
    <div class="MenuBar">
        <ul>
            <li>
                <router-link to="/">
                    <span class="iconfont">&#xe634;</span>
                    <span class="text">首页</span>
                </router-link>
            </li>
            <li>
                <router-link to="/Search">
                    <span class="iconfont">&#xe62b;</span>
                    <span class="text">搜索</span>
                </router-link>
            </li>
            <li>
                <router-link to="/Classify">
                    <span class="iconfont">&#xe72b;</span>
                    <span class="text">分类</span>
                </router-link>
            </li>
            <li>
                <router-link to="/ShopCar">
                    <span class="iconfont">&#xe656;</span>
                    <span class="text">购物车</span>
                </router-link>
            </li>
            <li>
                <router-link to="/User">
                    <span class="iconfont">&#xe619;</span>
                    <span class="text">我</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "MenuBar"
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
        color: #fb9b00;
    }
</style>
