<template>
    <search-list>
        <template slot="top">
           <div class="title">
               <h2>历史搜索</h2>
               <span class="iconfont">&#xe634;</span>
           </div>
        </template>
        <template slot="bottom">
            <ul>
                <li v-for="(item,index) of historySearch" :key="index">
                    <router-link
                            to="/Classify"
                            @touchstart.native="showDeleteButton()"
                            @touchend.native="clearLoop()"
                    >
                    {{item}}
                    </router-link>
                </li>
            </ul>
        </template>
    </search-list>
</template>

<script>
    import SearchList from "./searchList";
    export default {
        name: "historySearch",
        components: {SearchList},
        data(){
            return{
                historySearch:["瑞士军刀","水果刀","其他","A12系列","菜刀","水果刀"]
            }
        },
        methods:{
            showDeleteButton() {
                clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
                this.Loop = setTimeout(function() {
                    // this.historySearch.splice(0,1)
                }.bind(this), 1000);
            },
            clearLoop() {
                clearTimeout(this.Loop);
            },

        }
    }
</script>

<style scoped>

</style>
