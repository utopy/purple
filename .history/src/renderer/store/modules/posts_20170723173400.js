import '@/assets/purple'

const state = {
    after: null,
    before: null,
    posts: {
        subreddits:[]
    }
}

const mutations = {
    UPDATE_SUBREDDIT_POSTS (state, res) {
        state.after = res.after
        state.before = res.before
        state.posts.subreddits.push(res)
    }
}

const actions = {
    updateSubredditPosts({commit}, data){
        commit("UPDATE_SUBREDDIT_POSTS", data)
    }
}

export default{
    state,
    mutations,
    actions
}