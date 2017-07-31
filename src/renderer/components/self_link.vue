<template>
<div >
    <p class="title" @click="expand(i)">
                    {{post.data.title}}
                </p>
                <div v-if="post.expanded" class="post-content">
                    <span class="selftext" v-html="post.data.selftext">
                    </span>
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
</style>