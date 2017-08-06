<template>
    <div class="container">
        <searchbar style="width: 100%;" :showButton="true" v-on:searchInput="loadPosts($event)"></searchbar>
        <div class="title">
            r/{{capitalize(getCurrentTitle)}}
        </div>

        <div class="save">
            <span v-if="!isFavorite(title)" @click="$store.dispatch('favoriteSubreddit', title)"><img width="10px"src="../assets/svg/plus.svg" alt=""></span>
            <span v-else @click="$store.dispatch('unfavoriteSubreddit', title)"><img width="10px"src="../assets/svg/menus.svg" alt=""></span>
        </div>

        <div class="subreddit-infos"></div>
        
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import searchbar from '@/components/searchbar'
export default {
    name:"header",
    props: ["title"],
    components: {searchbar},
    data(){
        return{
        }
    },
    methods:{
        loadPosts(name){

            this.$emit("subredditSearch", name)
        },
        capitalize(o){
        return o[0].toUpperCase() + o.slice(1, o.length)
        }
    },
    computed:{
        ...mapGetters(['isFavorite', 'getCurrentTitle'])
    }
}
</script>
<style scoped>

    .container{
        padding-top: 40px;
        width: 80%;
        margin: auto;
        height: auto;
        padding-bottom:20px;
    }

    .search-bar{
        display: inline-block;
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
    }

    .search-bar div{
        display: inline-block;
    }
    .search-bar .input{
        width: calc(100% - 100px);
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
        width: 100px;
        padding: 0;
        height: 30px;
        display: inline-block;
        background: #C32373;
        float: right;
        text-align:center;
        line-height:30px;
        color:white;
        font-weight: 300;
        font-size:12px
    }

    .title{
        font-size: 25px;
        font-weight: bold;
        border-bottom: 2px solid #C32373;
        display: inline;
    }

    .save{
        display: inline;
        margin-left: 10px;
        font-weight: 400;
        text-align: center;
        width: 15px;;
        height: 15px;
        font-size: 10px;
    }
</style>
