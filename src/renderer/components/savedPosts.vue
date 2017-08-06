<template>
    <div class="main-wrapper">
        <div class="container">
            <div class="posts">
                <div class="post" v-for="(post, i) in getSavedPosts">
                    <div class="post-wrapper" v-if="post.data.is_self">
                        <selfLink v-bind:post="post" v-bind:i="i"></selfLink>
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
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import selfLink from './self_link.vue'
    import imagePost from './image_post.vue'
    import buttons from './buttons.vue'
    import comments from './comments.vue'
    import externalLink from './externalLink.vue'
    export default {
        components: {selfLink, imagePost, buttons, comments, externalLink},
        computed:{
            ...mapGetters(['getSavedPosts'])
        },
        methods:{
            changeUrl(url){
                let u = url.replace(/\//g, "_");
                return `reader/${u}`
            }
        }
    }
</script>
<style scoped></style>