<template>
  <div>

  </div>
</template>

<script>
import '../assets/purple'
import store from '@/store'
export default {
  data(){
    return{
      
    }
  },
  mounted(){
    this.$store.dispatch("getSubredditPosts", "node",{})
  }

}
</script>

<style>


</style>


