<template>
  <div id="app">
    <div class="drag-area"></div>
    <div class="content">
      <div class="sidebar">
        <sidebar></sidebar>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
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


<style scoped>
  /* CSS */
  .sidebar {
    position: fixed;
    height: 100vh;
    width: 200px;
    float: left;
    z-index: 102;
  }

  .wrapper{
    width: calc(100vw - 200px);
    position: absolute;
    height: 100%;
    right: 0;
  }
  .content{
    display: inline-flex;
    flex-direction: row;
    height: 100vh;
  }
  .drag-area{
    -webkit-app-region: drag;
    height: 22px;
    background: transparent;
    width: 100vw;
    position: fixed;
  }

  #app{
    height:100vh;
    width:100vw;
  }
</style>


<style>
  *{
    margin: 0;
    font-family: arial
  }
</style>
