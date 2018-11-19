<template>
    <div class="fullShopCar">
        <div class="bigProList">
            <div class="merchant">
                <form action="">
                    <div class="left">
                        <input type="checkbox" class="merAllCheck">
                        <router-link to="/ShopCar" class="iconfont">
                            <i>&#xe619;</i>
                            <span>kelly家的故事</span>
                            <i>&#xe619;</i>
                        </router-link>
                    </div>
                    <span>领券</span>
                </form>
                <span @click="isDelete()">{{delText}}</span>
            </div>
            <div class="proList">
                <ul>
                    <li  v-for="item of proList" :key="item.id">
                        <div class="main" ref="main">
                            <label class="checkbox">
                                <!--<b
                                        @click="item.checked = !item.checked"
                                ></b>-->
                                <input
                                        type="checkbox"
                                        :checked="item.checked"
                                        @click="item.checked = !item.checked"
                                >
                            </label>
                            <img :src="item.ImgUrl" alt="">
                            <div class="msg">
                                <h2>{{item.ProTitle}}</h2>
                                <span>颜色：彩虹色</span>
                                <form action="">
                                    <span class="price">￥:{{item.PorPrice}}</span>
                                    <div class="myForm">
                                        <button
                                                type="button"
                                                class="reduce"
                                                @click="item.ProNums <= 1 ? item.ProNums = 1 : item.ProNums--"
                                        >-</button>
                                        <input
                                                type="text"
                                                value="1"
                                                v-model="item.ProNums"
                                        >
                                        <button
                                                type="button"
                                                class="add"
                                                @click="item.ProNums++"
                                        >+</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="accountsBar">
            <form action="">
                <div class="left">
                    <label @click="allChecked()">
                        <!--<b></b>-->
                        <input
                                type="checkbox"
                                :checked="isChecked"
                        >
                        <span>全选</span>
                    </label>
                    <span class="total">合计：<i>￥:{{allTotal}}</i></span>
                </div>
                <div class="accounts" v-if="isDeletes">去结算</div>
                <div class="accounts delete" v-else @click="remove()">删除</div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fullShopCar",
        data(){
            return{
                proList:[],
                isDeletes:true,
                delText:"编辑"
            }
        },
        mounted(){
            if(localStorage.getItem("proItems")){
                // let proList = JSON.parse(localStorage.getItem("proItems"));
                this.proList = JSON.parse(localStorage.getItem("proItems"));
            }else{
                this.$emit("proItemsNo")
            }

        },
        methods:{
            allChecked(){
                this.proList.forEach((item,i)=>{
                    this.proList[i].checked = !this.proList[i].checked;
                })
            },
            isDelete(){
                this.isDeletes = !this.isDeletes;
                //console.log(this.isDeletes)
                if (this.isDeletes===false){
                    this.delText="完成"
                } else {
                    this.delText="编辑"
                }
            },
            remove(){
                let isCheckedList=[];
                let noCheckedList=[];
                this.proList.forEach((item,i)=>{
                    if (this.proList[i].checked === true){
                        isCheckedList.push(item)
                    }else{
                        noCheckedList.push(item)
                    }
                });
                localStorage.setItem("proItems",JSON.stringify(this.proList = noCheckedList))
                if(this.proList.length === 0){
                    localStorage.clear();
                    this.$router.go(0);
                }
            }
        },
        computed:{
            allTotal(){
                let total = 0;
                this.proList.forEach((item,i)=>{
                    if(this.proList[i].checked){
                        total += this.proList[i].PorPrice * this.proList[i].ProNums
                    }
                });
                return total
            },
            isChecked(){
                let bool = true;
                this.proList.forEach((item)=>{
                    if(item.checked === false){
                        bool = false
                    }
                });
                return bool;
            },

        }
    }
</script>

<style scoped>
    .fullShopCar{
        width: 750px;
        height: auto;
        /*position: relative;*/
    }
    .fullShopCar .bigProList{
        padding: 0 20px;
        box-sizing: border-box;
    }
    .fullShopCar .merchant{
        width: inherit;
        height: 96px;
        line-height: 96px;
        display: flex;
        justify-content: space-between;
    }
    .fullShopCar .merchant form{
        width: 620px;
        height: inherit;
        display: flex;
        justify-content: space-between;
    }
    .fullShopCar .merchant form .left a{
        margin-left: 15px;
    }
    .fullShopCar .merchant form .left a span{
        margin: 0 20px 0 15px;
        font-size: 24px;
        color: #000000;
    }
    .fullShopCar .merchant form .left a >>> i{
        font-size: 25px;
    }
    .fullShopCar .proList{
        width: inherit;
        height: auto;
    }
    .fullShopCar .proList ul{
        width: inherit;
        height: auto;
    }
    .fullShopCar .proList ul li{
        width: inherit;
        height: 200px;
        padding: 20px 0 10px 0;
    }
    .fullShopCar .proList ul li .main{
        width: inherit;
        height: 200px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .fullShopCar .proList ul li .main label{
        width: auto;
        height: 200px;
        line-height: 200px;
    }
    .fullShopCar .proList ul li .main img{
        width: 200px;
        height: 200px;
    }
    .fullShopCar .proList ul li .main .msg{
        width: 420px;
        height: 200px;
        position: relative;
        font-size: 24px;
        color: #000000;
        letter-spacing: 1px;
        line-height: 32px;
    }
    .fullShopCar .proList ul li .main .msg span{
        color: #a8a8a8;
    }
    .fullShopCar .proList ul li .main form{
        width: 420px;
        height: 82px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        line-height: 82px;
    }
    .fullShopCar .proList ul li .main form .price{
        font-size: 24px;
        color: #087ccd;
    }
    .fullShopCar .proList ul li .main form .myForm button{
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid #666666;
        box-sizing: border-box;
        line-height: 28px;
    }
    .fullShopCar .proList ul li .main form .myForm input{
        width: 40px;
        height: 28px;
        text-align: center;
    }
    .fullShopCar .accountsBar{
        width: 750px;
        height: 92px;
        line-height: 92px;
        position: fixed;
        bottom: 96px;
        border: 1px solid #cacaca;
        border-right: 0;
        border-left: 0;
        padding: 0 20px;
        box-sizing: border-box;
        background-color: #fff;
    }
    .fullShopCar .accountsBar form{
        width: 710px;
        height: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*flex-direction: column;*/
        line-height: 92px;
    }
    .fullShopCar .accountsBar form .left label{
        width: 120px;
        height: inherit;
        line-height: 92px;
        /*display: flex;*/
        /*justify-content: space-around;*/
        font-size: 24px;
    }
    .fullShopCar .accountsBar form .left label span{
        margin: 0 12px;
    }
    .fullShopCar .accountsBar form .left .total{
        display: inline-block;
        width: auto;
        height: 92px;
        line-height: 92px;
        font-size: 18px;
        margin-left: 20px;
    }
    .fullShopCar .accountsBar form .left .total i{
        font-size: 36px;
        color: #087ccd;
    }
    .fullShopCar .accountsBar form .accounts{
        width: 164px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #ffffff;
        border-radius: 30px;
        background-color: #087ccd;
        font-size: 22px;
    }
</style>
