<template>
  <div>
      <div class="post" v-for="post in posts">
          {{post}}
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
        padding: 20px;
        height: 100px;
    }
</style>
