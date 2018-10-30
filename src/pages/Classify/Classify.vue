<template>
    <div class="Classify">
        <classify-header></classify-header>
            <div class="main">
                <from>
                    <input type="text" placeholder="找你想要的">
                </from>

            </div>
        <MenuBar></MenuBar>
    </div>
</template>

<script>
    import ClassifyHeader from "./components/classifyHeader";
    export default {
        name: "Classify",
        components: {ClassifyHeader}
    }
</script>

<style scoped>

</style>