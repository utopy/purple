<template>
    <div class="content">
        <div class="menu-item" v-for="o in options">
            <p>{{upperCase(o.name)}}</p>
            <div class="menu-voice" v-for="v in o.voices">
                <router-link :to="v">{{capitalize(v)}}</router-link>
            </div>
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
  },
  methods:{
    upperCase(o){
        return o.toUpperCase()
    },
    capitalize(o){
        return o[0].toUpperCase() + o.slice(1, o.length)
    }
  }
}
</script>
<style scoped>
.content{
    width: 200px;
    height: 100%;
    border-right: 2px solid #2F1847;
    display: flex;
    flex-direction: column;

    }

.menu-item{
    width:100px;
    text-align: center;
    margin: auto;
}

.menu-item p {
    margin-top: 5px;
    color: #2F1847;

}

.menu-voice{
    color: black;
    margin-top: 20px;
}


a{
    color: black;
    margin-top: 5px;
    text-decoration: none;
}


</style>
