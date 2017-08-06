<template>
    <div class="content">
        <div class="empty">
            <div class="empty-icon">
                <i class="icon icon-people"></i>
            </div>
            <div class="form-horizontal">
                <div class="form-group col-8" style="margin:auto; margin-bottom: 20px">
                    <div class="col-12">
                        <input class="form-input" type="text" placeholder="Name" v-model="username" />
                    </div>
                </div>
                <div class="form-group col-8" style="margin:auto">
                    <div class="col-12">
                        <input class="form-input" type="password" placeholder="Password" v-model="password" />
                    </div>
                </div>
                <div class="form-group col-8" style="margin:auto">
                    <div class="col-12">
                        <button class="btn btn-primary" @click="login" style="width: 270px; margin-top: 20px">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        login(){
            let data = {
                username: this.username, password: this.password
            }
            console.log(data)
            purple.request("POST", "http://www.utopy.it/authenticate", data, (err, res)=>{
                if(err){

                } else {
                    localStorage.setItem("token",res.token)
                    this.$router.push("/admin")
                }
            })
        }
    }
}
</script>
<style scoped>
.content{
    height: 100vh;
    width: 100%;
    background: #f8f9fa
  }

  .content .empty{
    position: relative;
    top: calc(50% - 219px / 2);
  }
</style>
