<template>
  <div>
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
      console.log(this.$store.state.reddit_posts)
    }, {})
  }

}
</script>

<style>


</style>


