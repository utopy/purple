<template>
  <div>
      <div class="post" v-for="post in posts">
          {{post.data.title}}
      </div>
  </div>
</template>
<script>
export default {
    props: ['posts', 'subredditName'],
    name: this.subredditName,
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .post{
        width: 100%;
        height: 100px;
        position: absolute
    }
</style>
