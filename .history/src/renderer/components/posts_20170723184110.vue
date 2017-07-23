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
    }

    .post{
        height: 100px;
        width: 100%;
        background: blue;
        margin-bottom: 20px;
        padding: 20px;
    }
</style>
