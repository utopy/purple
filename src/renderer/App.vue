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
  import '@/assets/bubbles.css'
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
    padding: 50px 0;
  }

  .wrapper{
    width: calc(100vw - 200px);
    position: absolute;
    background: #D8D8D8;
    height: 100%;
    right: 0;
  }
  .content{
    width:100vw;
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

  @font-face {
    font-family: Roboto;
    font-weight: 900;
    src: url('./assets/Roboto/Roboto-Black.ttf');
  }

  @font-face {
    font-family: Roboto;
    font-weight: Bold;
    src: url('./assets/Roboto/Roboto-Bold.ttf');
  }

  @font-face {
    font-family: Roboto;
    font-weight: Normal;
    src: url('./assets/Roboto/Roboto-Regular.ttf');
  }

  @font-face {
    font-family: Roboto;
    font-weight: 300;
    src: url('./assets/Roboto/Roboto-Light.ttf');
  }

    *{
    margin: 0;
    font-family: Roboto;
  }
</style>
