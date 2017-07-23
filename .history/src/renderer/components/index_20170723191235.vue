<template>
  <div >
    <posts v-bind:subredditName="subreddit" v-bind:posts="posts"></posts>
  </div>
</template>

<script>
import '@/assets/purple'
import posts from '@/components/posts'
import store from '@/store'
export default {
  data(){
    return{
      posts: [],
      subreddit: "",
    }
  },
  components: {posts},
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


