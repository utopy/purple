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
  }
</style>


<style scoped>
  /* CSS */
  .drag-area{
    -webkit-app-region: drag;
    height: 22px;
    width: 100vw;
    background: red;
    z-index:101!important;
  }
</style>
