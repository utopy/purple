<template>
  <div class="main-wrapper" >
    <headbar v-if="getViewPosts.length" @subredditSearch="loadPosts($event)" v-bind:title="subreddit"></headbar>
    <posts v-if="getViewPosts.length" v-bind:posts="getViewPosts"></posts>
    <div v-if="getViewPosts.length" class="button" >
      <div class="btn btn-primary" :class="{loading: getLoadingState}" @click="loadMore">
        <span >Load More</span>
      </div>
    </div>
    <div v-else class="no-content">
      <div class="empty">
        <div class="empty-icon">
          <i class="icon icon-people"></i>
        </div>
        <h4 class="empty-title">NO POSTS HERE</h4>
        <p class="empty-subtitle">search for a subreddit</p>
        <div class="empty-action input-group input-inline">
          <searchbar style="width: 270px;" :showButton="false" v-on:searchInput="loadPosts($event)"></searchbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import '@/assets/purple'
import posts from '@/components/posts'
import searchbar from '@/components/searchbar'
import headbar from '@/components/head'
import store from '@/store'
export default {
  data(){
    return{
      posts: null,
      subreddit: "",
      scroll: false,
      isLoading: false
    }
  },
  components: {posts, headbar, searchbar},
  methods:{
    search(n){
      console.log(n)
    },
    loadPosts(name){
      console.log(name)
      this.$store.dispatch("getPosts", name)
      this.subreddit = name;
    },
    loadMore(){
      console.log(this.subreddit)
      this.$store.dispatch("loadMorePosts")
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
    ...mapGetters(['getViewPosts', 'getLoadingState'])
  },
  mounted(){
    if(this.getViewPosts.length){
      console.log(this.getViewPosts)
      this.posts = this.getViewPosts
    }
    //this.$store.dispatch("getPosts", u)
    
  },
  created(){
    window.onbeforeunload = (e)=>{
      let subs = this.$store.state.sidebar.options[1].voices
      localStorage.setItem("voices", subs)
    }

    window.onload = (e)=>{
      let v = localStorage.getItem("voices");
      
    }
  }

}
</script>

<style scoped>
  .scrollable{
    overflow-y: scroll;
  }
  .no-content{
    height: 100vh;
    width: 100%;
    background: #f8f9fa
  }

  .no-content .empty{
    position: relative;
    top: calc(50% - 219px / 2);
  }

    .main-wrapper{
      background: #D8D8D8;
      overflow-y: hidden;
      width: 100%;
    }

    .button{
      text-align: center;
    }
    .btn{
        width: 150px;
        height: auto;
        margin-left: calc(50% - 75px);
        color: white;
        margin: auto;
        margin-bottom: 30px;
    }

</style>


