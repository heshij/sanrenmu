<template>
    <div class="Home">
        我是首页
        <MenuBar></MenuBar>
        <HomeTop></HomeTop>
    </div>
</template>

<script>
    import HomeTop from './components/HomeTop.vue'
    export default {
        name: "Home",
        components:"HomeTop"
    }
</script>

<style scoped>

</style>