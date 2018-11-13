<template>
    <div class="searchList">
        <slot name="top"></slot>
        <slot name="bottom"></slot>
    </div>
</template>

<script>
    export default {
        name: "searchList"
    }
</script>

<style scoped>
    .searchList{
        width: 750px;
        height: auto;
        padding: 0 28px;
        box-sizing: border-box;
    }
    .searchList .title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #cacaca;
        margin-bottom: 20px;
    }
    .searchList .title h2{
        width: 690px;
        height: 62px;
        font-size: 24px;
        color: #666666;
        line-height: 62px;
        padding-left: 20px;
    }
    .searchList ul{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
    }
    .searchList .title span{
        height: 62px;
        line-height: 62px;
        font-size: 30px;
    }
    .searchList ul li{
        width: auto;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        color: #000000;
        border: 2px solid #087ccd;
        margin-bottom: 10px;
        border-radius: 15px;
        padding: 0 25px;
    }
</style>
