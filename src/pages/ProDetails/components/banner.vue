<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">

            <!-- slides -->
            <swiper-slide v-for="item of imgList" :key="item.id">
                <img :src="item.url" class="image-item">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "banner",
        components: {
            swiper,
            swiperSlide
        },
        data(){
            return{
                imgList: [{
                    id: 1,
                    url: require('../../.././images/proDetails/pro-details_banner.jpg')
                }, {
                    id: 2,
                    url: require('../../.././images/proDetails/pro-details_banner.jpg')
                }, {
                    id: 3,
                    url: require('../../.././images/proDetails/pro-details_banner.jpg')
                }],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay:{
                        stopOnLastSlide:true,
                        delay:3000,
                        disableOnInteraction: false
                    },
                    loop:true
                },
                swiperSlides: [1, 2, 3]
            }
        }
    }
</script>

<style scoped>
    .banner {
        width: 750px;
        height: 732px;
    }
    .banner .swiper-slide .image-item {
        width: 750px;
        height: 732px;
    }
    .banner >>> .swiper-pagination-bullet{
        width: 20px;
        height: 20px;
        display: inline-block;
        opacity: .5;
        background-color: #000000;
    }
    .banner >>> .swiper-pagination-bullet-active {
        background-color: #ffffff;
    }
</style>