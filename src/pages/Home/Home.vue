<template>
    <div class="Home">
        <HomeTop></HomeTop>
        <banner></banner>
        <MenuBar></MenuBar>
    </div>
</template>

<script>
    import HomeTop from './components/HomeTop.vue'
    import Banner from "./components/banner";
    export default {
        name: "Home",
        components:{
            Banner,
            HomeTop
        }
    }
</script>

<style scoped>

</style>