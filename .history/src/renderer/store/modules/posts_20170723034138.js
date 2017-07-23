import '@/assets/purple'

const state = {
    posts: []
}

const mutations = {
    GET_SUBREDDIT_POSTS (state, posts) {
        state.posts = [...posts, state.posts]
    }
}

const actions = {
    getSubredditPosts({commit}, subreddit, options){
        purple.getSubredditPosts(subreddit, (err, res)=>{
            commit("GET_SUBREDDIT_POSTS", res)
        }, options)
    }
}

export default{
    state,
    mutations,
    actions
}