<template>
<div class="container">
    
    <div class="posts" v-on:mouseenter="scrollable" v-on:mouseleave="scrollable":class="{scrollable:scroll}">
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
                <div class="subtitle">{{post.data.domain}} - {{convertDate(post.data.created_utc)}}</div>

                <buttons v-bind:post="post" :i="i"></buttons>
                <comments v-bind:post="post"></comments>
        </div>
    </div>
</div>
</template>
<script>
import moment from 'moment'
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
            scroll: false,
        }
    },
    methods:{
        scrollable(){
                console.log("bella")
                this.scroll = !this.scroll
            },
        changeUrl(url){
            let u = url.replace(/\//g, "_");
            return `reader/${u}`
        },
        convertDate(date){
            let d = (new Date(date * 1000));
            d = moment.utc(d).local().format("HH:mm DD/MM/YYYY")
            return d
        }
    },
    computed:{
    }

}
</script>
<style scoped>
    .scrollable{
        overflow-y: scroll
    }
    .container{
        width: 100%;
        height: 100%;
    }

    .post-title{
        margin-bottom: 20px;
    }

    .title{
        font-weight: bold;
    }

    .posts{
        overflow-y: hidden;
    }
    .post{
        min-height: 60px;
        padding: 20px;
        width: 80%;
        background-color: #F4F4F4;
        margin: auto;
        margin-bottom: 30px;  
    }
    .subtitle{
        font-size: 10px;
    }
</style>
