<template>
<div class="container">
    <div class="posts">
        <div class="post" v-for="(post, i) in posts">
            <div class="post-wrapper" v-if="post.data.is_self">
                <selflink v-bind:post="post" v-bind:i="i"></selflink>
            </div>
            <div class="post-wrapper" v-else-if="post.data.preview">
                <imagePost v-bind:post="post" v-bind:i="i"></imagePost>
            </div>
            <div class="post-wrapper" v-else>
                <p class="title">
                    <router-link :to="changeUrl(post.data.url)">{{post.data.title}} - ext</router-link>
                </p>
            </div>
                <buttons v-bind:post="post" :i="i"></buttons>
                <comments v-bind:post="post"></comments>
        </div>
    </div>
</div>
</template>
<script>
import selflink from './self_link.vue'
import imagePost from './image_post.vue'
import buttons from './buttons.vue'
import comments from './comments.vue'
import externalLink from './externalLink.vue'
import store from '@/store'
export default {
    props: ["posts"],
    name: "posts",
    components: {selflink, imagePost, buttons, comments, externalLink},
    data(){
        return{

        }
    },
    methods:{
        changeUrl(url){
            let u = url.replace(/\//g, "_");
            return `reader/${u}`
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
