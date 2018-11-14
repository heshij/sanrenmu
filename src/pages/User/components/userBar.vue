<template>
    <div class="userBar">
        <slot name="title"></slot>
        <slot name="barMain"></slot>
    </div>
</template>

<script>
    export default {
        name: "userBar"
    }
</script>

<style scoped>
    .userBar{
        width: 750px;
        height: 156px;
        /*background-color: skyblue;*/
        margin: 10px 0;
    }
    .userBar .title{
        width: inherit;
        height: 52px;
        line-height: 52px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #efebeb;
    }
    .userBar ul{
        width: inherit;
        height: 96px;
        display: flex;
        position: relative;
        justify-content: space-between;
    }
    .userBar ul li{
        width: 20%;
        height: inherit;
    }
    .userBar ul li a {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: #333333;
        font-size: 24px;
        line-height: 38px;

    }
</style>
