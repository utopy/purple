<template>
    <div class="content">
        <div class="bottom-bar">
            <router-link to="admin">Admin</router-link>
        </div>
        <ul v-for="o in options" class="menu">
            <!-- menu header text -->
            <div class="divider" :data-content="upperCase(o.name)"></div>
            <!-- menu item -->
                <li v-if="o.name!== 'subreddits'" v-for="v in o.voices" class="menu-item">
                    <router-link 
                        :to="v" 
                        @click.native="log(v)">{{capitalize(v)}}</router-link>
                    
                </li>
                <li v-if="o.name === 'main'" class="menu-item">
                    <router-link to="saved-posts">Saved <label class="label label-primary">{{getSavedPostsLength}}</label></router-link>
                        
                </li>
                <li v-if=" o.name === 'subreddits'" 
                    @click="loadFavoriteSubreddit(v)" 
                    class="menu-item" 
                    v-for="v in o.voices" 
                    :class="{activeSub: $store.state.reddit_posts.current === v}">
                    <a>{{capitalize(v)}}</a>
                </li>
            <!-- menu item with badge -->
        </ul>
    </div>
</template>
<script>
import {ipcRenderer} from 'electron'
import { mapGetters } from 'vuex'
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
    },
    openLogin(){
        ipcRenderer.send("openLogin")
    },
    log(v){
        console.log(v)
       this.$router.push(`/${v}`)
    },
    loadSavedPosts(){
        this.$store.dispatch("getSavedPosts")
    }
  },
  computed:{
      ...mapGetters(['getSavedPostsLength'])
  }
}
</script>
<style scoped>

.bottom-bar{
    background: #4452c0;
    width: 100%;
    height: 20px;
    position: absolute;
    z-index: 200;
    bottom: 0;

}

.bottom-bar *{
    z-index: 201
}

ul{
    box-shadow:none
}

.content{
    width: 200px;
    height: 100%;
    overflow-y:scroll;
    /* border-right: 2px solid #2F1847; */
    }

    .menu{
        z-index:101;
    }

.menu-item{
    width:100px;
    text-align: center;
    margin: auto;
    margin:20px auto;
}





.active{
    border: 1px solid #C32373;
}

.activeSub{
    /* border-left: 1px solid #C32373;
    border-right: 1px solid #C32373 */

}

</style>
