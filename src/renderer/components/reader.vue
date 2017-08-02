<template>
  <div class="main">
      <div class="wrapper">
            <p class="title"v-html="title"></p>
            <div class="content" v-html="content"></div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            url: "",
            loading: true,
            title: "",
            content: "",
            img: ""
        }
    },
    mounted(){
        this.url = this.$route.params.url.replace(/\_/g, "/")
        console.log(this.url)
        this.request(this.url, (err, res)=>{
            if(err) console.log(err)
            else {
                console.log(res)
                this.title = res.title
                this.content = res.content
                this.img = res.lead_image_url
            }
        })


    },
    methods: {
        request(url, callback){
            let apiKey = "5utRqDG94vKrIU4f6YplZ5pRDCFAhz396OzJctC9"
            let rq = new XMLHttpRequest();
            let err = null
            rq.open('GET', `https://mercury.postlight.com/parser?url=${url}`)
            rq.setRequestHeader("x-api-key", apiKey)
            rq.onload = function() {
                if (rq.status >= 200 && rq.status < 400) {
                    // Success!
                    var data = JSON.parse(rq.responseText);
                    callback(err, data)
                } else {
                // We reached our target server, but it returned an error
                err = "error"
                callback(err)
                }
            };

            rq.send()
        }
    }
}
</script>

<style>

    figure {
        width: 100%;
        text-align:center;
        margin:40px 0;
    }
    figure img{
        width: calc(100% - 40px);
        height: auto;
        margin: auto;
        
    }
</style>


<style scoped>
    .title{
        margin: 50px 0;
        font-size: 24px;
        font-weight: bold
    }

    div{
    }

    .main{
        width: 100%;
        height:100vh;
        background: #624763;
        overflow-y:hidden;
    }

    .wrapper{
        width: 100%;
        min-height: 100%;
        overflow-y:scroll;
        padding:40px;
    }

    .wrapper div{
        width: 100%;
        height:auto;
    }

    .content{
        height:100%;
        padding:40px;
        background:#8B8B8B

    }
</style>
