const state = {
    options: [{
        name: "main",
        voices: ["home","new", "popular", "rising"]
    },{
        name: "subreddits",
        voices: []
    }]
}

const mutations = {
    FAVORITE_SUBREDDIT(state, subreddit){
        state.options[1].voices.push(subreddit)
    },
    UNFAVORITE_SUBREDDIT(state, subreddit){
        let i = state.options[1].voices.indexOf(subreddit)
        state.options[1].voices.splice(i, 1)
    }
}

const actions = {
    favoriteSubreddit({commit}, subreddit){
        commit("FAVORITE_SUBREDDIT", subreddit)
    },
    unfavoriteSubreddit({commit}, subreddit){
        commit("UNFAVORITE_SUBREDDIT", subreddit)
    }
}

const getters = {
    isFavorite: (state)=>(name)=>{
        return (state.options[1].voices.indexOf(name) !== -1)
        
    }
}

export default{
    state,
    actions,
    mutations,
    getters
}