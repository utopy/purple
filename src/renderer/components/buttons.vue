<template>
<div>
    <div class="button" v-if="post.data.num_comments !== 1" @click="expand_comments(i)">
        {{post.data.num_comments}} COMMENTS
    </div>
    <div class="button" v-else @click="expand_comments(i)">
        {{post.data.num_comments}} COMMENT
    </div>
    <div class="button" @click="savePost(i)">
        SAVE POST
    </div>
    <div class="button">
        HIDE POST
    </div>


    <div class="button" style="float: right">
        Author: {{post.data.author}}
    </div>
</div>
</template>
<script>
export default{
    props: ['post', 'i'],
    methods:{
        expand_comments(i){
            this.$store.dispatch("clearComments")
            this.$store.dispatch("expandComments", i)
            this.$store.dispatch("loadComments", this.post.data.permalink)
        },
        savePost(i){
            this.$store.dispatch("savePost", i)
        }
    }
}
</script>
<style scoped>
    .button{
        padding: 5px 10px;
        background:#E8E8E8;
        display: inline-block;
        font-size: 10px;
        right: 0;
        margin-top: 10px;
    }
</style>