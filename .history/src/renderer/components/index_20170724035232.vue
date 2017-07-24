<template>
  <div>
    <headbar @subredditSearch="getPosts($event)" v-bind:title="subreddit"></headbar>
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
  methods: {
    search(n){
      console.log(n)
    },
    getPosts(name){
      this.$store.dispatch("getPosts", name, ()=>{
        console.log(res)
      } )
    }
    // getPosts(name){
    //   purple.getSubredditPosts(name, (err, res)=>{
    //   let o = res;
    //   o.subreddit_name = name
    //   this.$store.dispatch("updateSubredditPosts", o)
    //   let p = this.$store.getters.getPosts(name)
    //   console.log(p)
    //   this.subreddit = o.subreddit_name
    //   })
    // }
  },
  mounted(){
    let u = "node"
    purple.getSubredditPosts(u, (err, res)=>{
      let o = res;
      o.subreddit_name = u
      this.$store.dispatch("updateSubredditPosts", o)
      this.posts = [...o.posts, ...this.posts]
      this.subreddit = o.subreddit_name
    }, {})
  }

}
</script>

<style>


</style>


