<template>
    <div class="container">
        <div class="search-bar">
            <input type="text" v-model="input">
            <div class="button"></div>
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
        height: auto;
    }

    .search-bar{
        width: 100%;
    }
    .search-bar input{
        width: calc(100% - 40px);
        height: 30px;
        background: #2F1847;
        border: 0;
        color: #C32373;
    }
    .search-bar .button{
        width: 40px;
        height: 30px;
        display: inline;
        background: #C32373
    }
</style>
