<template>
  <div class="container">
      <div class="post-title">
          {{subredditName}}
      </div>
      <div class="posts">
        <div class="post" v-for="post in posts">
          {{post.data.title}}
        </div>
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
        background: #E07DED;
        width: calc(100% - 40px);
        padding: 20px;
    }

    .post-title{
        margin-bottom: 20px;
    }

    .posts{
        overflow-y: scroll;
    }

    .post{
        height: 100px;
        background: white;
        width: 80px;
        margin-bottom: 20px;
    }
</style>
