<template>
    <div class="Search">
        <div class="searchTop">
            <router-link to="/" class="iconfont">&#xe634;</router-link>
            <form action="">
                <input type="text">
            </form>
            <span>搜索</span>
        </div>
        <MenuBar></MenuBar>
        <hot-search></hot-search>
        <history-search></history-search>
    </div>
</template>

<script>
    import HotSearch from "./components/hotSearch";
    import HistorySearch from "./components/historySearch";
    export default {
        name: "Search",
        components: {HistorySearch, HotSearch}
    }
</script>

<style scoped>
    .Search{
        width: 750px;
        height: auto;
    }
    .Search .searchTop{
        width: inherit;
        height: 96px;
        display: flex;
        justify-content: space-between;
        line-height: 96px;
        background-color: #191919;
        padding: 0 48px;
        box-sizing: border-box;
    }
    .Search .searchTop form{
        width: 486px;
        height: 60px;
    }
    .Search .searchTop form input{
        width: 486px;
        height: 60px;
        border-radius: 30px;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .Search .searchTop a{
        font-size: 40px;
        color: #ffffff;
    }
    .Search .searchTop span{
        font-size: 36px;
        color: #ffffff;
    }
</style>
