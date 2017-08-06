<template>
<div class="panel" style="height:100%">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>platform</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(u, i) in users"class="">
                <td>{{i}} ] {{u.name}}</td>
                <td>{{u.email}}</td>
                <td>{{u.platform}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
export default {
    data(){
        return{
            users: []
        }
    },
    mounted(){
        if(localStorage.getItem("token") === null){
            this.$router.push("/login")
        } else {
            purple.request("POST", "http://www.utopy.it/admin/get-users",{token:localStorage.getItem("token")}, (err, res)=>{
                console.log(res)
                res.users.forEach((email)=>{
                    this.users.push(email)
                }, this)
            })
        }
    }
}

</script>
<style scoped>
.panel{
    padding: 20px;
}
</style>
