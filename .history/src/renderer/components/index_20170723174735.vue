<template>
  <div>
    <div v-for="p in posts">{{p.data.edited}}</div>
  </div>
</template>

<script>
import '@/assets/purple'
import store from '@/store'
export default {
  data(){
    return{
      posts: []
    }
  },
  mounted(){
    let u = "node"
    purple.getSubredditPosts(u, (err, res)=>{
      console.log(res)
      let o = res;
      o.subreddit_name = u
      this.$store.dispatch("updateSubredditPosts", o)
    }, {})
    purple.getSubredditPosts(u, (err, res)=>{
      console.log(res)
      let o = res;
      o.subreddit_name = u
      this.$store.dispatch("updateSubredditPosts", o)
    }, {})
    this.posts.push(this.$store.state.reddit_posts.subreddit[0])
  }

}
</script>

<style>


</style>


