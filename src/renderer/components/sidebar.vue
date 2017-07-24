<template>
    <div class="content">
        <div class="menu-item" v-for="o in options">
            <router-link :to="o">{{o}}</router-link>
        </div>
    </div>
</template>
<script>
import store from '@/store'
export default {
  data(){
      return {
          options: []
      }
  },
  mounted(){
      this.options = this.$store.state.sidebar.options
  }
}
</script>
<style scoped>
.content{
    width: 200px;
    height: 100%;
    border: 2px solid #2F1847;
    border-top-left-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around

    }

.menu-item{
    padding: 20px;
    height: 30px;
    background: blue;
    text-align: center
}

a{
    color: white;
}


</style>
