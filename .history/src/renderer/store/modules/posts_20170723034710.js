import '@/assets/purple'

const state = {
    posts: []
}

const mutations = {
    GET_SUBREDDIT_POSTS (state, posts) {
        let p = [...posts]
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