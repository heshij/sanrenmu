<template>
    <div class="classify">
        <Header>
            <template slot="left">
                <router-link to="/" tag="a">
                    <i class="iconfont">&#xe619;</i>
                    <span>分类</span>
                </router-link>
            </template>
            <template slot="right">
                <router-link to="/" class="iconfont" tag="a">
                    <b class="iconfont">&#xe619;</b>
                    <span class="iconfont">&#xe619;</span>
                </router-link>
            </template>
        </Header>
    </div>
</template>

<script>
    import Header from "../../../components/Header";
    export default {
        name: "classifyHeader",
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>