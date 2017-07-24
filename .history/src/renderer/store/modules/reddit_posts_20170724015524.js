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
        let exists = false
        state.subreddits.forEach((s, i)=>{
            if(s.subreddit_name === data.subreddit_name){
                exists = true
                console.log(data.subreddit_name)
            }
        }, this)
        if(exists){
            return "subreddit already cached"
        } else {
            commit("UPDATE_SUBREDDIT_POSTS", data)
        }
    }
}

const getters = {
    checkIfCached(state, n){
        console.log(state)
        return(n)
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}