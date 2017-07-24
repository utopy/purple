<template>
  <div class="container">
      <div class="posts">
        <div class="post" v-for="post in posts">
          <p class="title">
              {{post.data.title}}
          </p>
          <p class="infos">
               Author {{post.data.author}}
          </p>
          <div class="divider"></div>
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
        width: 100%;
    }

    .post-title{
        margin-bottom: 20px;
    }

    .title{
        font-weight: bold;
    }

    .posts{
        overflow-y: scroll;
    }


    .post{
        min-height: 60px;
        border-bottom: 2px solid #E71AEF;
        width: 80%;
        margin: auto;
        margin-bottom: 30px;
        
    }
</style>
