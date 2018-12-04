<template>
    <search-list>
        <template slot="top">
           <div class="title">
               <h2>历史搜索</h2>
               <span class="iconfont">&#xe63f;</span>
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
    import { Dialog } from 'vant';
    import Vue from 'vue'
    Vue.use(Dialog);
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
                    Dialog.confirm({
                        title: '是否删除该历史记录',
                        // message: '弹窗内容'
                    }).then(() => {
                        // on confirm
                        // this.historySearch.splice(0,1)
                    }).catch(() => {
                        // on cancel
                    });
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
