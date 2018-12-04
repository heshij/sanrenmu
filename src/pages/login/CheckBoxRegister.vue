<template>
    <div class="CheckBoxRegister">
        <CheckBtn>
            <template slot="text">
                <span>我已阅读并同意服务条款</span>
            </template>
        </CheckBtn>
    </div>
</template>

<script>
    import CheckBtn from '@/components/CheckBtn.vue'
    export default {
        name: "CheckBoxRegister",
        components:{
            CheckBtn
        }
    }
</script>

<style scoped>

</style>