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
        console.log(res)
    }
}

const actions = {
    updateSubredditPosts({commit}, data){
        let d = data
        commit("UPDATE_SUBREDDIT_POSTS", d)
    }
}

export default{
    state,
    mutations,
    actions
}