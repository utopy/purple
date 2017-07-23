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
        commit(GET_SUBREDDIT_POSTS, posts)
    }
}

export default{
    state,
    mutations
}