import '@/assets/purple'

const state = {
    posts: []
}

const mutations = {
    GET_SUBREDDIT_POSTS (state, posts) {
        console.log(posts)
    }
}

const actions = {
    getSubredditPosts({commit}, subreddit, options){
        purple.getSubredditPosts(subreddit, (err, res)=>{
            if(err){
                console.log(err)
            }
            commit("GET_SUBREDDIT_POSTS", res)
        }, options)
    }
}

export default{
    state,
    mutations,
    actions
}