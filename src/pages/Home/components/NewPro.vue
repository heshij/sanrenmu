<template>
    <div class="newPro">
        <ul>
            <li>
                <h2></h2>
                <span></span>
                <router-link to="/">
                    <img src="" alt="">
                </router-link>
            </li>
            <li>
                <h2></h2>
                <span></span>
                <router-link to="/">
                    <img src="" alt="">
                </router-link>
            </li>
            <li>
                <h2></h2>
                <span></span>
                <router-link to="/">
                    <img src="" alt="">
                </router-link>
            </li>
            <li>
                <h2></h2>
                <span></span>
                <router-link to="/">
                    <img src="" alt="">
                </router-link>
            </li>
            <li>
                <h2></h2>
                <span></span>
                <router-link to="/">
                    <img src="" alt="">
                </router-link>
            </li>
            <li>
                <h2></h2>
                <span></span>
                <router-link to="/">
                    <img src="" alt="">
                </router-link>
            </li>
            <li>
                <h2></h2>
                <span></span>
                <router-link to="/">
                    <img src="" alt="">
                </router-link>
            </li>
            <li>
                <h2></h2>
                <span></span>
                <router-link to="/">
                    <img src="" alt="">
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
</style>