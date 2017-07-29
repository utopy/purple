<template>
<div class="container">
    <div class="posts">
        <div class="post" v-for="(post, i) in posts">
            <div class="post-wrapper" v-if="post.data.is_self">
                <selflink v-bind:post="post" v-bind:i="i"></selflink>
            </div>
            <div class="post-wrapper" v-if="post.data.preview">
                <imagePost v-bind:post="post" v-bind:i="i"></imagePost>
            </div>   
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import selflink from './self_link.vue'
import imagePost from './image_post.vue'
import store from '@/store'
export default {
    props: ["posts"],
    name: "posts",
    components: {selflink, imagePost},
    data(){
        return{

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
</style>
