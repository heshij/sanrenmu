<template>
    <div class="nullShopCar">
        <div class="mes">
            <span class="iconfont">&#xe619;</span>
            <p>购物车还是空的快去逛逛吧~</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "nullShopCar"
    }
</script>
<style scoped>
    .nullShopCar {
        width: 750px;
        height: 1200px;
        position: relative;
        overflow: hidden;
    }

    .mes {
        width: 230px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        height: 236px;
    }

    .mes .iconfont {
        font-size: 86px;
    }

    .mes p {
        font-size: 32px;
    }
</style>
