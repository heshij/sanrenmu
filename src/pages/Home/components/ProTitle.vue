<template>
    <div class="proTitle">
        <h2>{{title}}</h2>
        <router-link to="/">{{routeLinkText}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "ProTitle",
        props:["info"],
        data(){
            return{
                title:this.info.title,
                routeLinkText:this.info.routeLinkText
            }
        }
    }
</script>

<style scoped>
    .proTitle{
        width: 680px;
        height: 55px;
        margin: 30px 35px 6px 35px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        line-height: 55px;
    }
    .proTitle h2{
        font-size: 32px;
        color: #000000;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .proTitle a{
        font-size: 18px;
        color: #087ccd;
        padding-right: 15px;
    }
</style>