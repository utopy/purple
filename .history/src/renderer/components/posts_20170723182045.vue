<template>
  <div>
      <div v-for="post in posts">
          {{post}}
      </div>
  </div>
</template>
<script>
export default {
    props: ['posts', 'subredditName'],
    name: this.subredditName,
    data(){

    }
}
</script>
<style>

</style>
