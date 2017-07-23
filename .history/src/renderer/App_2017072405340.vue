<template>
  <div id="app" stype="overflow: hidden">
    <div class="drag-area"></div>
    <div class="content">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import sidebar from '@/components/sidebar'
  export default {
    name: 'purple',
    components:  {sidebar}
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
