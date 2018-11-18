<template>
    <div class="ShopCar">
        <shop-header></shop-header>
        <div class="main">
            <full-shop-car v-if="bool"></full-shop-car>
            <null-shop-car v-else></null-shop-car>
        </div>
        <MenuBar></MenuBar>
    </div>
</template>

<script>
    import ShopHeader from "./components/shopHeader";
    import NullShopCar from "./components/nullShopCar";
    import FullShopCar from "./components/fullShopCar";
    export default {
        name: "ShopCar",
        components: {FullShopCar, NullShopCar, ShopHeader},
        data(){
            return{
                bool:false
            }
        },
        mounted(){
            if(localStorage.getItem("proItems")){
                this.bool = true;
                //console.log(localStorage.getItem("proItems"))
            }else{
                this.bool = false;
            }
        },
        methods:{
            proItemsNo(){
                this.bool = false
            }
        }
    }
</script>

<style scoped>
    .ShopCar{
        padding-top: 96px;
    }
</style>
