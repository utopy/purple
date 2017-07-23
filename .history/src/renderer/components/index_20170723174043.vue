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
    this.posts = this.$store.state.posts.subbreddits[0]
    console.log(this.posts)
  }

}
</script>

<style>


</style>


