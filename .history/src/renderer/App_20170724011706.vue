<template>
  <div id="app" stype="overflow: hidden">
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

  .content{
    display: inline-flex;
    flex-direction: row;
  }
  .drag-area{
    -webkit-app-region: drag;
    height: 22px;
    background: transparent;
    width: 100vw;
    position: fixed;
  }

  .wrapper{
    overflow-y:scroll;
  }

  #app{
    height:100vh;
    width:100vw;
  }
</style>


<style>
  *{
    margin: 0;
  }

  #app{
    overflow: hidden!important;
  }
</style>
