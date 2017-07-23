import purple from '../../assets/purple'

const state = {
    posts: []
}

const mutations = {
    GET_SUBREDDIT_POSTS (state, posts) {
        console.log(posts)
    }
}

const actions = {
    getSubredditPosts({commit}, data){
        commit("GET_SUBREDDIT_POSTS", data)
    }
}

export default{
    state,
    mutations,
    actions
}