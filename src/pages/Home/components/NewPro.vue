<template>
    <div class="newPro">
        <ul>
            <li>
                <div class="text">
                    <h2>全场满350减100</h2>
                    <span>全场低至1-3折，满就送</span>
                </div>
                <router-link to="/">
                   <div class="image">
                       <img src="../../.././images/home/newPro01.jpg" alt="">
                   </div>
                </router-link>
            </li>
            <li>
                <div class="text">
                    <h2>B系列</h2>
                    <span>1-3折起</span>
                </div>
                <router-link to="/">
                    <div class="image">
                        <img src="../../.././images/home/newPro02.jpg" alt="">
                    </div>
                </router-link>
            </li>
            <li>
                <div class="text">
                    <h2>B系列</h2>
                    <span>1-3折起</span>
                </div>
                <router-link to="/">
                    <div class="image">
                        <img src="../../.././images/home/newPro03.jpg" alt="">
                    </div>
                </router-link>
            </li>
            <li>
                <div class="text">
                    <h2>B系列</h2>
                    <span>1-3折起</span>
                </div>
                <router-link to="/">
                    <div class="image">
                        <img src="../../.././images/home/newPro04.jpg" alt="">
                    </div>
                </router-link>
            </li>
            <li>
                <div class="text">
                    <h2>B系列</h2>
                    <span>1-3折起</span>
                </div>
                <router-link to="/">
                    <div class="image">
                        <img src="../../.././images/home/newPro05.jpg" alt="">
                    </div>
                </router-link>
            </li>
            <li>
                <div class="text">
                    <h2>B系列</h2>
                    <span>1-3折起</span>
                </div>
                <router-link to="/">
                    <div class="image">
                        <img src="../../.././images/home/newPro06.jpg" alt="">
                    </div>
                </router-link>
            </li>
            <li>
                <div class="text">
                    <h2>B系列</h2>
                    <span>1-3折起</span>
                </div>
                <router-link to="/">
                    <div class="image">
                        <img src="../../.././images/home/newPro07.jpg" alt="">
                    </div>
                </router-link>
            </li>
            <li>
                <div class="text">
                    <h2>B系列</h2>
                    <span>1-3折起</span>
                </div>
                <router-link to="/">
                    <div class="image">
                        <img src="../../.././images/home/newPro08.jpg" alt="">
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewPro"
    }
</script>

<style scoped>
    .newPro{
        width: 680px;
        height: auto;
        margin: 0 35px;
    }
    .newPro ul{
        width: inherit;
        height: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
        position: relative;
    }
    .newPro ul li{
        width: 162px;
        height: 162px;
        margin-bottom: 10px;
        background-color: skyblue;
        position: relative;
    }
    .newPro ul li .text{
        width: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 99;
        padding-top: 18px;
    }
    .newPro ul li .image{
        width: 162px;
        height: 162px;
        position: relative;

    }
    .newPro ul li .image img{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
    }
    .newPro ul li:nth-child(1){
        width: 334px;
        height: 334px;
    }
    .newPro ul li:nth-child(4){
        width: 334px;
        position: absolute;
        top: 172px;
        right: 0;
    }
    .newPro ul li:nth-child(1) .image{
        width: 334px;
        height: 334px;
    }
    .newPro ul li:nth-child(4) .image{
        width: 334px;
    }
</style>