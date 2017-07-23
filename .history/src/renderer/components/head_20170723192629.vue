<template>
    <div class="container">
        <div class="search-bar">
            <input type="text" v-model="input">
        </div> 
    </div>
</template>
<script>
export default {
    name:"header",
    props: ["title"],
    data(){
        return{
            input: ""
        }
    }
}
</script>
<style scoped>

    .container{
        width: 80%;
        margin: auto;
        height: 100px;
        background: red;
    }

    .search-bar{
        width: calc(100% - 30px);
    }
</style>
