<template>
    <div class="container">
        <div class="posts">
            <div class="post" v-for="(post, i) in posts">
                <p class="title" @click="expand(i)">
                    {{post.data.title}}
                </p>
                <div v-if="post.expanded" class="post-content">
                    <p class="selftext">
                        {{post.data.selftext}}
                    </p>
                </div>
                <div class="button" v-if="post.data.num_comments !== 1">
                    {{post.data.num_comments}} COMMENTS
                </div>
                <div class="button" v-else>
                    {{post.data.num_comments}} COMMENT
                </div>
                <div class="button">
                    SAVE POST
                </div>
                <div class="button">
                    HIDE POST
                </div>

                <div class="button" style="float: right">
                    Author: {{post.data.author}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import store from '@/store'
export default {
    props: ["posts"],
    name: "posts",
    data(){
        return{

        }
    },
    methods:{
        expand(i){
            this.$store.dispatch("expandPost", i)
        }
    }
}
</script>
<style scoped>
    .container{
        width: 100%;
    }

    .post-title{
        margin-bottom: 20px;
    }

    .title{
        font-weight: bold;
    }

    .posts{
        overflow-y: scroll;
    }


    .post{
        min-height: 60px;
        padding: 20px;
        width: 80%;
        background-color: #F4F4F4;
        margin: auto;
        margin-bottom: 30px;  
        border-bottom: 2px solid #E71AEF; 
    }

    .infos{
        font-size: 12px;
        margin-top: 10px;
        text-align: right;
    }

    .post-content{
        margin-top: 20px;
        padding: 20px;
        font-size: 13px;
        text-align: justify;
        background: #E8E8E8
    }

    .selftext{}

    .button{
        padding: 5px 10px;
        background:#E8E8E8;
        display: inline-block;
        font-size: 10px;
        right: 0;
        margin-top: 10px;
    }
</style>
