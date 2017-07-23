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
      posts: [],
      subreddit: "",
    }
  },
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


