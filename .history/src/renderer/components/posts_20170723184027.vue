<template>
  <div class="container">
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
    .container{
        width: 100%;
        height: 100%;
        background: red;
        padding: 20px;
    }

    .post{
        height: 100px;
        width: 100%;
    }
</style>
