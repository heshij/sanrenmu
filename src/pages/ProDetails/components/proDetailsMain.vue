<template>
    <div class="proDetailsMain">
        <banner></banner>
        <div class="title">
            <div class="left">
                <h2>三刃木4077折叠刀随身便携小刀水果刀银色脉动纹</h2>
                <span>￥255.00</span>
            </div>
            <div class="right">
                <span class="iconfont">&#xe619;</span>
                <span>收藏</span>
            </div>
        </div>
        <div class="info">
            <div class="format">
                <router-link to="/ProDetails">
                    <span>请选择：规格/颜色</span>
                    <span class="iconfont">&#xe619;</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from "./banner";
    export default {
        name: "proDetailsMain",
        components: {Banner}
    }
</script>

<style scoped>

</style>