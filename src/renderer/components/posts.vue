<template>
  <div class="container">
      <div class="posts">
        <div class="post" v-for="post in posts">
          {{post.data.title}}
        </div>
      </div>
  </div>
</template>
<script>
export default {
    props: ['posts'],
    name: "posts",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .container{
        background: #E07DED;
        width: 100%;
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
        width: 80%;
        margin: auto;
        margin-bottom: 20px;
    }
</style>
