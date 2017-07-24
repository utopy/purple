import '@/assets/purple'

const state = {
    after: null,
    before: null,
    subreddits:[]
}

const mutations = {
    UPDATE_SUBREDDIT_POSTS (state, res) {
        state.after = res.after
        state.before = res.before
        state.subreddits.push(res)
    }
}

const actions = {
    updateSubredditPosts({commit}, data){
        console.log(data)
        commit("UPDATE_SUBREDDIT_POSTS", data)
    }
}

export default{
    state,
    mutations,
    actions
}