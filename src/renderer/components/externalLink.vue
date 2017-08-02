<template>
    <div>
        
    </div>
</template>
<script>
export default {
    name:"External_link",
    props:['post','i'],
    computed: {

    },
    methods:{
        changeRoute(){
            let url = this.post.data.url.replace(/\//g, "_")
            this.$router.push(`/reader/${url}`)
        }
    }
}
</script>
<style scoped>

</style>
