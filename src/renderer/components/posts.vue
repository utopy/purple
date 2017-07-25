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
import store from '@/store'
export default {
    props: ['posts'],
    name: "posts",
    data(){
        return{

        }
    },
    methods:{
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
        padding: 20px;
        width: 80%;
        background-color: #F4F4F4;
        margin: auto;
        margin-bottom: 30px;  
        border-bottom: 2px solid #E71AEF; 
    }

    .infos{
        font-size: 12px;
        margin-top: 10px;
        text-align: right;
    }
</style>
