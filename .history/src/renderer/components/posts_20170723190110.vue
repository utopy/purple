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
        width: calc(100% - 40px);
        height: 100%;
        padding: 20px;
        overflow-x: scroll
    }

    .post{
        height: 100px;
        background: blue;
        margin-bottom: 20px;
    }
</style>
