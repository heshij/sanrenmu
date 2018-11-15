<template>
    <div class="User">
        <user-header></user-header>
        <user-info></user-info>
        <order-bar></order-bar>
        <discounts-bar></discounts-bar>
        <user-sets></user-sets>
        <MenuBar></MenuBar>
    </div>
</template>

<script>
    import UserHeader from "./components/userHeader";
    import UserInfo from "./components/userInfo";
    import OrderBar from "./components/orderBar";
    import DiscountsBar from "./components/discountsBar";
    import UserSets from "./components/userSets";
    export default {
        name: "User",
        components: {UserSets, DiscountsBar, OrderBar, UserInfo, UserHeader}
    }
</script>

<style scoped>
    .User{
        padding-top: 96px;
        background-color: #efebeb;
    }
</style>
