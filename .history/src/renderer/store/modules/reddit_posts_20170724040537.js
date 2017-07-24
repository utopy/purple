import '@/assets/purple'

const state = {
    after: null,
    before: null,
    viewPosts:[],
    subreddits:[]
}

const mutations = {
    ADD_SUBREDDIT (state, res) {
        state.subreddits.push(res)
    },
    UPDATE_VIEW_POSTS (state, res){
        state.after = res.after
        state.before = res.before
        state.viewPosts = [...res.posts]
    }
}

const actions = {
    getPosts({commit}, name){
        let exists = false
        state.subreddits.forEach((s)=>{
            if(s.subreddit_name === name){
                exists = true
                console.log(exists)
                commit("UPDATE_VIEW_POSTS", s)
            }
        }, this)
        console.log(exists)
        if(exists === false){
            console.log("ciao")
        }
    },
    updateSubredditPosts({commit}, data){
        let exists = false
        state.subreddits.forEach((s, i)=>{
            if(s.subreddit_name === data.subreddit_name){
                exists = true
                console.log("exists")
            }
        }, this)
        if(exists){
            commit("UPDATE_VIEW_POSTS", data)
        } else {
            commit("UPDATE_VIEW_POSTS", data)
            commit("ADD_SUBREDDIT", data)
        }
    }
}

const getters = {
    getPosts(state){
        return (name)=>{
            state.subreddits.forEach((n)=>{
                console.log(n)
                if(n.subreddit_name === name){
                    console.log(n)
                    return 
                }
            },this)
        }
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}