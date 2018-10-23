<template>
    <div class="homeTop">
        <form action="">
            <span></span>
            <input type="text" placeholder="请输入关键字" >
            <span class="iconfont">&#xe647;</span>
        </form>
    </div>
</template>

<script>
    export default {
        name: "HomeTop"
    }
</script>

<style scoped>
    .homeTop{
        width: 750px;
        height: 96px;
        background-color: #191919;
        padding-top: 18px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }
    .homeTop form{
        width: 680px;
        height: 60px;
        display: flex;
        justify-content: space-around;
        line-height: 60px;
    }
    .homeTop form input{
        width: 550px;
        height: inherit;
        border-radius: 60px;
        text-align: center;
    }
    .homeTop form span:first-child{
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;
        margin-top: 10px;
    }
    .homeTop form span:last-child{
        font-size: 34px;
        color: #cccccc;
    }
</style>