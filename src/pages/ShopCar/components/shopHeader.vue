<template>
    <div class="shopHeader">
        <Header>
            <template slot="left">
                <router-link to="/" >
                    <i class="iconfont">&#xe621;</i>
                    <span>购物车</span>
                </router-link>
            </template>
            <template slot="right">
                <router-link to="/" class="iconfont" >
                    <b class="iconfont">&#xe628;</b>
                    <span class="iconfont">&#xe64c;</span>
                </router-link>
            </template>
        </Header>
    </div>
</template>

<script>
    import Header from "../../../components/Header";
    export default {
        name: "shopHeader",
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>