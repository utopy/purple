<template>
  <div id="app">
    <div class="drag-area"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'purple'
  }
</script>

<style>
  *{
    margin: 0;
    overflow: hidden;
  }
</style>


<style scoped>
  /* CSS */
  .drag-area{
    -webkit-app-region: drag;
    height: 22px;
    width: 100vw;
  }

  #app{
    height:100vh;
    width:100vw;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#CB7CEF), to(#154A88));
  }
</style>
