<template>
    <div class="ProList">
        <proListHeader></proListHeader>
        <div class="main">
            <!--<div class="sidebar">
                <ul>
                    <li
                            v-for="(item,index) of slideBarList"
                            :key="index"
                            :class="{on : index === active}"
                            @click="toClick(index)"
                    >
                        {{item}}
                    </li>
                </ul>
            </div>-->

           <!-- <div class="wrapper" ref="wrapper" >
                <ul class="wrapper-ul" ref="wrapperList">
                    <li class="wrapper-li"
                        v-for="(items,index) of proList"
                        :key="index"
                    >
                        <ul class="pro-items" >
                            <li
                                    class="pro-item"
                                    v-for="item of items"
                                    :key="item.id"
                                    ref="proItems"
                            >
                                <router-link to="/ProDetails">
                                    <div class="image">
                                        <img :src="item.imgUrl">
                                    </div>
                                    <div class="msg">
                                        <span>{{item.price}}</span>
                                        <span>月销{{item.num}}笔</span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>-->

            <swiper :options="swiperOption" tag="ul" class="wrapper">
                <!-- slides -->
                <swiper-slide
                        tag="li"
                        v-for="(items,index) of proList"
                        class="wrapper-li"
                        :key="index"
                >
                    <ul class="pro-items" >
                        <li
                                class="pro-item"
                                v-for="item of items"
                                :key="item.id"
                                ref="proItems"
                        >
                            <router-link to="/ProDetails">
                                <div class="image">
                                    <img :src="item.imgUrl">
                                </div>
                                <div class="msg">
                                    <span>{{item.price}}</span>
                                    <span>月销{{item.num}}笔</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </swiper-slide>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </swiper>
        </div>
        <MenuBar></MenuBar>
    </div>
</template>

<script>
    import proListHeader from "./proListHeader";
    // import  BScroll from 'better-scroll';
    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        name: "ProList",
        components: {swiper,swiperSlide,proListHeader},
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className,text) {
                            switch (index) {
                                case 0:text="全部";break;
                                case 1:text="家居型";break;
                                case 2:text="户外型";break;
                                case 3:text="礼盒型";break;
                                case 4:text="多用型";break;
                                case 5:text="其他";break;
                            }
                            return '<span class="' + className + '">' + text + '</span>';
                        },
                    }
                },
                active: 0,
                slideBarList: ["全部", "家居型", "户外型", "礼盒型", "多用型", "其他"],
                proList: [
                    [
                        {
                            "id": 1,
                            "imgUrl": " https://heshij.github.io/img/pro-list_001.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 2,
                            "imgUrl": "https://heshij.github.io/img/pro-list_002.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 3,
                            "imgUrl": "https://heshij.github.io/img/pro-list_003.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 4,
                            "imgUrl": "https://heshij.github.io/img/pro-list_004.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 5,
                            "imgUrl": "https://heshij.github.io/img/pro-list_005.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 6,
                            "imgUrl": "https://heshij.github.io/img/pro-list_006.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 7,
                            "imgUrl": "https://heshij.github.io/img/pro-list_007.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 8,
                            "imgUrl": "https://heshij.github.io/img/pro-list_008.jpg",
                            "price": 19999,
                            "num": 233
                        }
                    ],
                    [
                        {
                            "id": 1,
                            "imgUrl": " https://heshij.github.io/img/pro-list_001.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 2,
                            "imgUrl": "https://heshij.github.io/img/pro-list_002.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 3,
                            "imgUrl": "https://heshij.github.io/img/pro-list_003.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 4,
                            "imgUrl": "https://heshij.github.io/img/pro-list_004.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 5,
                            "imgUrl": "https://heshij.github.io/img/pro-list_005.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 6,
                            "imgUrl": "https://heshij.github.io/img/pro-list_006.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 7,
                            "imgUrl": "https://heshij.github.io/img/pro-list_007.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 8,
                            "imgUrl": "https://heshij.github.io/img/pro-list_008.jpg",
                            "price": 19999,
                            "num": 233
                        }
                    ],
                    [
                        {
                            "id": 1,
                            "imgUrl": " https://heshij.github.io/img/pro-list_001.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 2,
                            "imgUrl": "https://heshij.github.io/img/pro-list_002.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 3,
                            "imgUrl": "https://heshij.github.io/img/pro-list_003.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 4,
                            "imgUrl": "https://heshij.github.io/img/pro-list_004.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 5,
                            "imgUrl": "https://heshij.github.io/img/pro-list_005.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 6,
                            "imgUrl": "https://heshij.github.io/img/pro-list_006.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 7,
                            "imgUrl": "https://heshij.github.io/img/pro-list_007.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 8,
                            "imgUrl": "https://heshij.github.io/img/pro-list_008.jpg",
                            "price": 19999,
                            "num": 233
                        }
                    ],
                    [
                        {
                            "id": 1,
                            "imgUrl": " https://heshij.github.io/img/pro-list_001.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 2,
                            "imgUrl": "https://heshij.github.io/img/pro-list_002.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 3,
                            "imgUrl": "https://heshij.github.io/img/pro-list_003.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 4,
                            "imgUrl": "https://heshij.github.io/img/pro-list_004.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 5,
                            "imgUrl": "https://heshij.github.io/img/pro-list_005.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 6,
                            "imgUrl": "https://heshij.github.io/img/pro-list_006.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 7,
                            "imgUrl": "https://heshij.github.io/img/pro-list_007.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 8,
                            "imgUrl": "https://heshij.github.io/img/pro-list_008.jpg",
                            "price": 19999,
                            "num": 233
                        }
                    ],
                    [
                        {
                            "id": 1,
                            "imgUrl": " https://heshij.github.io/img/pro-list_001.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 2,
                            "imgUrl": "https://heshij.github.io/img/pro-list_002.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 3,
                            "imgUrl": "https://heshij.github.io/img/pro-list_003.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 4,
                            "imgUrl": "https://heshij.github.io/img/pro-list_004.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 5,
                            "imgUrl": "https://heshij.github.io/img/pro-list_005.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 6,
                            "imgUrl": "https://heshij.github.io/img/pro-list_006.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 7,
                            "imgUrl": "https://heshij.github.io/img/pro-list_007.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 8,
                            "imgUrl": "https://heshij.github.io/img/pro-list_008.jpg",
                            "price": 19999,
                            "num": 233
                        }
                    ],
                    [
                        {
                            "id": 1,
                            "imgUrl": " https://heshij.github.io/img/pro-list_001.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 2,
                            "imgUrl": "https://heshij.github.io/img/pro-list_002.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 3,
                            "imgUrl": "https://heshij.github.io/img/pro-list_003.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 4,
                            "imgUrl": "https://heshij.github.io/img/pro-list_004.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 5,
                            "imgUrl": "https://heshij.github.io/img/pro-list_005.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 6,
                            "imgUrl": "https://heshij.github.io/img/pro-list_006.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 7,
                            "imgUrl": "https://heshij.github.io/img/pro-list_007.jpg",
                            "price": 19999,
                            "num": 233
                        },
                        {
                            "id": 8,
                            "imgUrl": "https://heshij.github.io/img/pro-list_008.jpg",
                            "price": 19999,
                            "num": 233
                        }
                    ],
                ]
            }
        },
        methods:{
            toClick(index){
                this.active = index;
            }
        }
        /*mounted() {
            //即定时器 20ms

            this.$nextTick(() => {
                let width=0;
                for (let  i = 0; i <this.proList.length; i++) {
                    width+=this.$refs.proItems[0].getBoundingClientRect().width*2
                }
                //console.log(this.$refs.wrapperList)
                this.$refs.wrapperList.style.width=width+'px';                //$refs绑定元素
                this.$nextTick(()=>{
                    if(!this.scroll){
                        this.scroll = new BScroll(this.$refs.wrapper, {
                            //开启点击事件 默认为false
                            click:true,
                            startX:0,
                            scrollX:true,
                            eventPassthrough:'vertical'
                        })
                        // console.log(this.scroll)
                    }else{
                        this.scroll.refresh()
                    }
                })
            })
        }*/
    }
</script>

<style scoped>
    .ProList {
        padding-top: 96px;
        position: relative;
    }

    .main {
        width: 100%;
        height: 100%;
    }

    .main .sidebar {
        position: fixed;
        z-index: 99;
        width: inherit;
        height: 96px;
        display: flex;
        justify-content: center;
        background-color: #fff;
    }

    .main .sidebar ul {
        width: 680px;
        height: inherit;
        display: flex;
        justify-content: space-around;
    }

    .main .sidebar ul li {
        width: auto;
        height: inherit;
        line-height: 96px;
        text-align: center;
        background-color: #ffffff;
        font-size: 26px;
        font-family: "锐字云字库细圆体", serif;
        color: #a3a3a3;
    }

    .main .sidebar ul .on {
        color: #087ccd;
        border-bottom: 6px solid #087ccd;
        box-sizing: border-box;
    }

    .wrapper {
        width: 100%;
        overflow: hidden;
    }
    .wrapper .wrapper-ul{
        width: 100%;
        display: flex;
        padding-right: 90px;
    }
    .wrapper .wrapper-li{
        width: 750px;
        height: 100%;
        /*overflow: hidden;*/
        /*padding-left: 70px;*/
    }
    .wrapper .pro-items{
        width:750px;
        display: flex;
        justify-content: space-around;
        flex-wrap:wrap;
        /*margin-left: 70px;*/
        /*overflow: hidden;*/
    }
    .wrapper .pro-item{
        width: 336px;
        height: 578px;
        /*margin-right: 10px;*/

    }
    .wrapper .pro-item .image{
        width: 336px;
        height: 500px;
        position: relative;
    }
    .wrapper .pro-item .image img{
        position: absolute;
        width: 336px;
        height: 500px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .wrapper .pro-item .msg{
        display: flex;
        justify-content: space-between;
    }
</style>
