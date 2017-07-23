<template>
  <div>
    <div v-for="p in posts">{{p.kind}}</div>
  </div>
</template>

<script>
import '@/assets/purple'
import store from '@/store'
export default {
  data(){
    return{
      posts : this.$store.state.posts
    }
  },
  mounted(){
    this.$store.dispatch("getSubredditPosts", "node", {})
    console.log(this.$store.state.posts)
  }

}
</script>

<style>


</style>


