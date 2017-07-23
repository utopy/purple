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
      posts : this.$store.state.posts
    }
  },
  mounted(){
    let u = "node"
    purple.getSubredditPosts(u, (err, res)=>{
      console.log(res)
    }, {})
  }

}
</script>

<style>


</style>


