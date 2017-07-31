<template>
    <div v-if="post.expand_comments">
        <div class="comments-wrapper">
            <div class="info"></div>
            <div class="comment" v-for="comment in getPostComments">
                {{comment.data.body}}
                <div v-if="comment.data.replies !== ''">
                    <div v-for="reply in comment.data.replies.data.children" 
                        class="comment">
                        {{reply.data.body}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default{
    name: "comments",
    props: ["post"],
    computed:{
        ...mapGetters(['getPostComments'])
    },
}
</script>
<style scoped>
    .comments-wrapper{
        width: 100%;
    }


    .comment{
        margin: 10px 0px 0px 20px;
        padding: 10px;
        border-left: 1px solid #624763;
        background: #E8E8E8;
    }

    .comments-wrapper > div{
        margin-left:0;
        border: 0;
    }
</style>