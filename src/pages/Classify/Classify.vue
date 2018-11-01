<template>
    <div class="Classify">
        <classify-header></classify-header>
        <form class="search">
            <input type="text" placeholder="找你想要的">
        </form>
        <div class="main">
            <div class="slideBar" ref="slideBar">
                <ul>
                    <li
                            v-for="(item,index) of slideBarList"
                            :key="index"
                            :class="{on:index === active}"
                            @click="handleClick(index,$event)"
                    >{{item}}
                    </li>
                </ul>
            </div>
            <div class="wrapper" ref="wrapper">
                <ul class="wrapper-ul">
                    <li class="wrapper-li"
                        v-for="(items,index) of proList"
                        :key="index"
                        ref="wrapperList"
                    >
                        <ul class="pro-items">
                            <li
                                    class="pro-item"
                                    v-for="item of items"
                                    :key="item.id"
                            >
                                <router-link to="/ProList">
                                    <div class="image">
                                        <img :src="require(`../../images/classify/${item.imgUrl}.png`)">
                                    </div>
                                    <p>{{item.text}}</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <MenuBar></MenuBar>
    </div>
</template>

<script>
    import ClassifyHeader from "./components/classifyHeader";
    import BetterScroll from 'better-scroll'

    export default {
        name: "Classify",
        components: {ClassifyHeader},
        data() {
            return {
                scrollY:0,
                listHeight:[],
                slideBarList: ["家具", "野外", "急救包", "折叠包", "钥匙扣", "设备", "军刀", "其他"],
                proList: []
            }
        },
        methods:{
            handleClick(i){
                this.clickEvent = true;
                if(!event._constructed){
                    return
                }else{
                    var right =  this.$refs.wrapperList;
                    var el = right[i];
                    this.rights.scrollToElement(el,300);
                }
            },
            initScroll(){
                this.lefts = new BetterScroll(this.$refs.slideBar,{
                    click:true
                });
                this.rights = new BetterScroll(this.$refs.wrapper,{
                    probeType:3,
                    click:true
                });

                this.rights.on("scroll",(props)=>{
                    this.scrollY = Math.abs(Math.round(props.y));
                    // console.log(props)
                })
            },
            getHeight(){
                var itemHeight = this.$refs.wrapperList;
                var height = 0;
                this.listHeight.push(height);
                var that = this;
                // console.log(itemHeight)
                for(var i=0;i<=itemHeight.length-1;i++){
                    height += itemHeight[i].clientHeight;
                    that.listHeight.push(height);
                }
                // console.log(this.listHeight)
            }
        },
        mounted(){
            this.$http.get('/api/classifyJson')
            .then((res)=>{
                this.proList = res.data.data;
                this.$nextTick(()=>{
                    this.initScroll()
                    this.getHeight()
                })
            })
        },
        computed:{
            active(){
                for(var i = 0; i<this.listHeight.length-1; i++){
                    var h1 = this.listHeight[i]
                    var h2 = this.listHeight[i+1]

                    if(this.scrollY >= h1 && this.scrollY < h2){
                        return i
                    }
                    if(this.scrollY >= this.listHeight[this.listHeight.length-1]){
                        return 0
                    }
                }
            }
        }

    }
</script>


<style scoped>
    .Classify {
        padding-top: 190px;
        padding-bottom: 105px;
    }

    .search {
        width: 750px;
        height: 60px;
        display: flex;
        justify-content: center;
        padding-top: 18px;
        margin-bottom: 18px;
        position: fixed;
        z-index: 99;
        top: 96px;
        background-color: #fff;
    }

    .search input {
        width: 550px;
        height: inherit;
        background-color: #efebeb;
        border-radius: 30px;
        text-align: center;
    }

    .main {
        width: 750px;
        height: auto;
        display: flex;
        overflow: hidden;
    }

    .main .slideBar {
        width: 128px;
        height: 1038px;
        background-color: #efebeb;
    }

    .main .slideBar ul {
        width: inherit;
        height: auto;
    }

    .main .slideBar ul li {
        width: inherit;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #efebeb;
        font-size: 28px;
        color: #000;
    }

    .main .slideBar ul .on {
        background-color: #fff;
        border-right: 6px solid #087ccd;
        box-sizing: border-box;
    }
    .wrapper{
        width: 572px;
        height: 780px;
    }
    .wrapper .pro-items{
        height: auto;
        display: flex;
        flex-wrap: wrap;
        /*justify-content: space-around;*/
        margin-left: 25px;
        /*overflow: hidden;*/
        margin-bottom: 20px;
    }
    .wrapper .pro-item{
        width: 180px;
        height: 190px;
    }
    .wrapper .pro-item .image{
        width: 180px;
        height: 166px;
        position: relative;
    }
    .wrapper .pro-item .image img{
        position: absolute;
        width: 94px;
        height: 52px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .wrapper .pro-item p{
        height: 24px;
        width: 100%;
        text-align: center;
        line-height: 24px;
        color: #000000;
    }
</style>