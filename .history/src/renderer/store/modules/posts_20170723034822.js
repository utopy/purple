import '@/assets/purple'

const state = {
    after: "",
    before: "",
    posts: []
}

const mutations = {
    GET_SUBREDDIT_POSTS (state, res) {
        let p = [res.posts]
        console.log(p)
    }
}

const actions = {
    getSubredditPosts({commit}, subreddit, options){
        purple.getSubredditPosts(subreddit, (res)=>{
            commit("GET_SUBREDDIT_POSTS", res)
        }, options)
    }
}

export default{
    state,
    mutations,
    actions
}