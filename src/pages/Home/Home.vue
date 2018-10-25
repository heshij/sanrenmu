<template>
    <div class="Home">
        <HomeTop></HomeTop>
        <banner></banner>
        <other></other>
        <ProTitle :info="proListTitle.hot"></ProTitle>
        <HotPro></HotPro>
        <ProTitle :info="proListTitle.new"></ProTitle>
        <NewPro></NewPro>
        <MenuBar></MenuBar>
    </div>
</template>

<script>
    import HomeTop from './components/HomeTop.vue'
    import Banner from "./components/banner.vue";
    import other from "./components/other.vue";
    import ProTitle from "./components/ProTitle.vue";
    import HotPro from "./components/HotPro.vue";
    import NewPro from "./components/NewPro.vue";
    export default {
        name: "Home",
        components:{
            Banner,
            HomeTop,
            other,
            ProTitle,
            HotPro,
            NewPro
        },
        data(){
            return{
                proListTitle:{
                    hot:{
                        title:"手机秒杀",
                        routeLinkText:"更多"
                    },
                    new:{
                        title:"新品特卖",
                        routeLinkText:"更多"
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .Home{
        width: 750px;
        /*height: 1000px;*/
        padding-bottom: 104px;
        background-color: #efebeb;
        /*background-color: skyblue;*/
    }
</style>