<template>
    <div class="Header">
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .Header{
        height: 96px;
        background: #191919;
        display: flex;
        justify-content: space-between;
        padding: 0 35px;
        width: 100%;
        box-sizing: border-box;
        align-items: center;
        font-size: 32px;
        letter-spacing: 2px;
    }
    .Header a {
        color: #fff;
    }
    .Header a >>> i{
        margin: 0 10px;
    }
    .Header a >>> b{
        margin-right: 52px;
    }
    .Header a >>> .iconfont{
        font-size: 40px;
        color: #fff;
    }
</style>