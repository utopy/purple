<template>
  <div class="main-wrapper">
    <headbar @subredditSearch="getPosts($event)" v-bind:title="subreddit"></headbar>
    <posts v-bind:posts="getViewPosts"></posts>
    <div class="button" @click="loadMore">
            Load More
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import '@/assets/purple'
import posts from '@/components/posts'
import headbar from '@/components/head'
import store from '@/store'
export default {
  data(){
    return{
      posts: [],
      subreddit: "node",
    }
  },
  components: {posts, headbar},
  methods: {
    search(n){
      console.log(n)
    },
    getPosts(name){
      this.$store.dispatch("getPosts", name)
      this.subreddit = name
    },
    loadMore(){
      this.$store.dispatch("loadMorePosts", this.subreddit)
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
  computed:{
    ...mapGetters(['getViewPosts'])
  },
  mounted(){
    let u = "node"
    this.$store.dispatch("getPosts", u)
  }

}
</script>

<style scoped>

    .main-wrapper{
      background: #D8D8D8;
    }
    .button{
        width: 150px;
        height: auto;
        padding: 10px;
        background: #2F1847;
        text-align: center;
        color: white;
        margin: auto;
        margin-bottom: 30px;
    }

</style>


