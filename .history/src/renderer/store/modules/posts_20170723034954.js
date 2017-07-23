import '@/assets/purple'

const state = {
    after: null,
    before: null,
    posts: []
}

const mutations = {
    GET_SUBREDDIT_POSTS (state, res) {
        let p = [...res.posts, ...state.posts]
        state.posts = p
        state.after = res.after
        state.before = res.before
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