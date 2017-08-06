<template>
<div class="form-autocomplete">
  <!-- autocomplete input container -->
  <div class="form-autocomplete-input form-input ">

    <!-- autocomplete chips -->
    <!-- autocomplete real input box -->
    <input class="form-input" type="text" placeholder="typing here" v-on:keyup="inputChange"  v-on:keyup.esc="hideAutocomplete" />
    <button style="margin-right:1px" class="btn btn-primary form-input input-group" v-if="showButton">Search</button>

  </div>
    
  <!-- autocomplete suggestion list -->
  <ul v-if="showSuggestions" class="menu">
    <!-- menu list chips -->
    <li v-for="s in subreddits" class="menu-item">
      <a href="#">
        <div class="tile tile-centered">
          <div class="tile-icon">
            <img v-if="s.data.icon_img!== ''" :src="s.data.icon_img" class="avatar avatar-sm" alt="Steve Rogers" />
          </div>
          <div class="tile-content" @click="emitSearch">
            {{s.data.display_name}}
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
</template>
<script>
export default {
    name:"search_bar",
    props:["showButton"],
    data(){
        return{
            subredditName: "",
            subreddits: null,
            input: "",
            showSuggestions: false
        }
    },
    methods:{
        inputChange(e){
            this.input = e.target.value

            if (this.input !== ""){
                purple.delay(()=>{
                console.log(this.input)
                purple.searchSubreddit({q:this.input, limit:4}, (err, res)=>{
                    console.log(res)
                    this.subreddits = res.data.children
                    this.showSuggestions = true
                })
                }, 200)
            } else {
              this.showSuggestions = false
            }

        },
        emitSearch(){
          this.$emit("searchInput", this.input)
          this.showSuggestions = false
          this.input = ""
        },
        hideAutocomplete(){
          this.showSuggestions = false
          this.input = ""
          
        }
    }
    
}
</script>
<style>

</style>
