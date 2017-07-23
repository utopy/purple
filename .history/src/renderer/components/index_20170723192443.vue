<template>
  <div>
    <head v-bind:title="subreddit"></head>
    <posts v-bind:posts="posts"></posts>
  </div>
</template>

<script>
import '@/assets/purple'
import posts from '@/components/posts'
import headbar from '@/components/head'
import store from '@/store'
export default {
  data(){
    return{
      posts: [],
      subreddit: "",
    }
  },
  components: {posts, headbar},
  mounted(){
    let u = "node"
    purple.getSubredditPosts(u, (err, res)=>{
      console.log(res)
      let o = res;
      o.subreddit_name = u
      console.log(o)
      this.$store.dispatch("updateSubredditPosts", o)
      this.posts = [...o.posts, ...this.posts]
      this.subreddit = o.subreddit_name
    }, {})
  }

}
</script>

<style>


</style>


