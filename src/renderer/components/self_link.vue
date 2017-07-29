<template>
<div >
    <p class="title" @click="expand(i)">
                    {{post.data.title}}
                </p>
                <div v-if="post.expanded" class="post-content">
                    <span class="selftext" v-html="post.data.selftext_html">
                    </span>
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
</template>
<script>
export default{
    props:['post', 'i'],
    name: "self_post",
    data(){
        return {

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