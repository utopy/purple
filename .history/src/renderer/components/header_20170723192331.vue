<template>
    <div class="container"></div>
</template>
<script>
export default {
    name:"header",
    props: ["title"]
}
</script>
<style scoped>
    .container{
        width: 80%;
        margin: auto;
        height: 100px;
        background: red;
    }
</style>
