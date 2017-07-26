<template>
    <div class="content">
        <div class="menu-item">
            <div class="profile-container">
                <div class="profile-image"></div>
                <div class="info">
                    UTOPY
                </div>
            </div>
        </div>
        <div class="menu-item" v-for="o in options" :class="{subreddits: o.name === 'subreddits'}">
            <p>{{upperCase(o.name)}}</p>
            <div v-if="o.name!=='subreddits'"class="menu-voice" v-for="v in o.voices" :class="{active: $route.name === v}">
                <router-link :to="v">{{capitalize(v)}}</router-link>
            </div>
            <div v-else class="menu-voice" :class="{activeSub: $store.state.reddit_posts.current === v}">
                <div @click="loadFavoriteSubreddit(v)">{{capitalize(v)}}</div>
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
    },
    loadFavoriteSubreddit(name){
      this.$store.dispatch("getPosts", name)
    }
  }
}
</script>
<style scoped>


.profile-image{
    width: 100px;
    height: 100px;
    background: #C32373;
    border-radius: 50%
}

.info{
    margin-top: 20px;
    font-weight: bold;
}
.content{
    width: 200px;
    height: 100vh;
    /* border-right: 2px solid #2F1847; */
    display: block;
    }

.menu-item{
    width:100px;
    text-align: center;
    margin: auto;
    margin-bottom: 50px;
}

.menu-item p {
    margin-top: 5px;
    font-weight: bold;
    color: #2F1847;

}

.menu-voice{
    color: black;
    margin-top: 20px;
    font-weight: 400;
    font-size: 12px;
    padding: 5px;
    border: 1px solid white;
    cursor: pointer;
}


a{
    color: black;
    margin-top: 5px;
    text-decoration: none;
}

.active{
    border: 1px solid #C32373;
}

.activeSub{
    border-left: 1px solid #C32373;
    border-right: 1px solid #C32373
}

</style>
