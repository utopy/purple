<template>
    <div class="container">
        <div class="search-bar">
            <div class="input">
                <input type="text" v-model="input" v-on:keyup.enter="search">
            </div>
            <div class="button"></div>
        </div>
        <div class="title">
            r/{{capitalize(title)}}
        </div>

        <div class="save">
            <span v-if="!isFavorite(title)" @click="$store.dispatch('favoriteSubreddit', title)">Save Shortcut</span>
            <span v-else @click="$store.dispatch('unfavoriteSubreddit', title)">remove Shortcut</span>
        </div>
        
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:"header",
    props: ["title"],
    data(){
        return{
            input: ""
        }
    },
    methods:{
        search(){
            this.$emit("subredditSearch", this.input)
        },
        capitalize(o){
        return o[0].toUpperCase() + o.slice(1, o.length)
        }
    },
    computed:{
        ...mapGetters(['isFavorite'])
    }
}
</script>
<style scoped>

    .container{
        width: 80%;
        padding: 20px;
        margin: auto;
        height: auto;
    }

    .search-bar{
        display: flex;
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
    }
    .search-bar .input{
        width: calc(100% - 40px);
        height: 30px;
    }

    .input input{
        height: 30px;
        background: #2F1847;
        width: 100%;
        border: 0;
        padding: 0;
        display: inline-block;
        color: #C32373;
        padding-left: 10px;
        color:white;
    }

    input:focus{
        outline: none;
    }
    .search-bar .button{
        width: 40px;
        padding: 0;
        height: 30px;
        display: inline-block;
        background: #C32373
    }

    .title{
        font-size: 25px;
        font-weight: bold;
        border-bottom: 2px solid #C32373;
        display: inline;
    }

    .save{
        float:right;
        font-weight: 400;
        font-size: 10px;
    }
</style>
