<template>
<div >
    <p class="title" @click="expand(i)">
                    {{post.data.title}}
                </p>
                <div v-if="post.expanded" class="post-content">
                    <div class="selftext">
                        <span style="text-align:left; white-space:pre-wrap" v-html="convertText(post.data.selftext)"></span>
                    </div>
                </div>
</div>
</template>
<script>
import marked from 'marked'
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
        },
        convertText(text){
            return marked(text)
        }
    }
}
</script>
<style>
    code{
        width: 100%;
        white-space: pre-wrap;
    }
</style>
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
</style>