<template>
    <div class="CheckBoxLogin">
        <CheckBtn>
            <template slot="text">
                <span>记住密码</span>
            </template>
        </CheckBtn>
    </div>
</template>

<script>
    import CheckBtn from '@/components/CheckBtn.vue'
    export default {
        name: "CheckBoxLogin",
        components:{
            CheckBtn
        }
    }
</script>

<style scoped>

</style>