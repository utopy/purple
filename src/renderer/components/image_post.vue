<template>
<div>
    <p class="title" @click="expand(i)">
        {{post.data.title}} + image {{post.expanded}}
    </p>
    <div v-if="post.expanded" class="post-content" @click="log(post)">
        <img v-bind:src="post.data.preview.images['0'].source.url"></img>
    </div>
</div>
</template>
<script>
export default{
    props: ['post', 'i'],
    name: "image_post",
    methods:{
        expand(i){
            this.$store.dispatch("expandPost", i)
            console.log(this.post)
        },
        log(post){
            console.log(post)
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

    img{
        width: 100%;
    }
</style>