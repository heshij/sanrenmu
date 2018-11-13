<template>
    <search-list>
        <template slot="top">
            <div class="title">
                <h2>热门搜索</h2>
            </div>
        </template>
        <template slot="bottom">
            <ul>
                <li v-for="(item,index) of hotList" :key="index">
                    <router-link to="/Search">{{item}}</router-link>
                </li>
            </ul>
        </template>
    </search-list>
</template>

<script>
    import SearchList from "./searchList";
    export default {
        name: "hotSearch",
        components: {SearchList},
        data(){
            return{
                hotList:["瑞士军刀","水果刀","其他","A12系列","菜刀","其他","A12系列","菜刀","瑞士军刀","水果刀","小刀","其他","A12系列","菜刀","瑞士军刀"]
            }
        }
    }
</script>

<style scoped>

</style>
