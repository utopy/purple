<template>
  <div id="app" stype="overflow: hidden">
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
  }

  #app{
    height:100vh;
    width:100vw;
    background: #E07DED
  }
</style>
