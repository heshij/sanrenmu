<template>
    <div class="userHeader">
        <Header>
            <template slot="left">
                <router-link to="/" >
                    <i class="iconfont">&#xe621;</i>
                    <span>个人中心</span>
                </router-link>
            </template>
            <template slot="right">
                <router-link to="/" class="iconfont" >
                    <span class="iconfont">&#xe626;</span>
                </router-link>
            </template>
        </Header>
    </div>
</template>
<script>
    import Header from "../../../components/Header";
    export default {
        name: "userHeader",
        components:{
            Header
        }
    }
</script>

<style scoped>

</style>
