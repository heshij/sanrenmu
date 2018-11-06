<template>
    <div class="ProDetails">
        <details-header></details-header>
        <div class="proTitleTab">
            <ul>
                <li
                        v-for="(item,index) of proTitleTab"
                        :key="index"
                        :class="{on : index === active}"
                        @click="toActive(index)"
                >
                    <router-link :to="item.url">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <details-img></details-img>
        <pro-assess></pro-assess>
    </div>
</template>

<script>
    import detailsHeader from './components/detailsHeader'
    import detailsImg from './components/detailsImg'
    import proAssess from './components/proAssess'

    export default {
        name: "ProDetails",
        components: {
            detailsHeader,
            detailsImg,
            proAssess
        },
        data() {
            return {
                active: 0,
                proTitleTab: [
                    {
                        title: "商品",
                        url:"/ProDetails"
                    },
                    {
                        title: "详情",
                        url:"/ProDetails/detailsImg"
                    },
                    {
                        title: "评价",
                        url:"/ProDetails/proAssess"
                    }
                ]
            }
        },
        methods: {
            toActive(index) {
                this.active = index;
            }
        }

    }
</script>

<style scoped>
    .ProDetails {
        padding-top: 96px;
        position: relative;
    }

    .ProDetails .proTitleTab {
        width: 100%;
        height: 96px;
        margin-left: 30px;
    }

    .ProDetails .proTitleTab ul {
        width: 336px;
        height: inherit;
        display: flex;
        justify-content: space-around;
        line-height: 96px;
        text-align: center;
    }

    .ProDetails .proTitleTab ul li {
        width: 112px;
    }

    .ProDetails .proTitleTab ul li a {
        font-size: 26px;
        font-family: "锐字云字库细圆体1.0", serif;
        color: #a3a3a3;
    }

    .ProDetails .proTitleTab ul .on {
        border-bottom: 6px solid #087ccd;
        box-sizing: border-box;
    }

    .ProDetails .proTitleTab ul .on a {
        color: #087ccd;
    }
</style>