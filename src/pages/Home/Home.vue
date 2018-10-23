<template>
    <div class="Home">
        <HomeTop></HomeTop>
        <banner></banner>
        <other></other>
        <MenuBar></MenuBar>
    </div>
</template>

<script>
    import HomeTop from './components/HomeTop.vue'
    import Banner from "./components/banner";
    import other from "./components/other.vue";
    export default {
        name: "Home",
        components:{
            Banner,
            HomeTop,
            other
        }
    }
</script>

<style scoped>
    .Home{
        width: 750px;
        /*height: 1000px;*/
        background-color: #efebeb;
        /*background-color: skyblue;*/
    }
</style>