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

<style scoped>
  /* CSS */
  .drag-area{
    -webkit-app-region: drag;
    height: 20px;
    width: 100vw;
  }
</style>
