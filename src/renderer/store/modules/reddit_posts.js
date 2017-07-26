import '@/assets/purple'

const state = {
    after: null,
    before: null,
    viewPosts:[],
    subreddits:[]
}

const mutations = {
    ADD_SUBREDDIT (state, res) {
        res.stored = Date.now()
        state.subreddits.push(res)
    },
    UPDATE_VIEW_POSTS (state, res){
        state.after = res.after
        state.before = res.before
        state.viewPosts = [...res.posts]
    },
    LOAD_MORE_POSTS (state, res){
        state.after = res.after;
        state.viewPosts = [...state.viewPosts, ...res.posts]
    }
}

const actions = {
    getPosts({commit}, name){
        let exists = false
        state.subreddits.forEach((s)=>{
            if(s.subreddit_name === name){
                exists = true
                console.log("exists")
                console.log(s.created)
                if(s.created + 10000 < Date.now()){
                    console.log("old cache")
                }
                commit("UPDATE_VIEW_POSTS", s)
            }
        }, this)
        if(exists === false){
            purple.getSubredditPosts(name, (err, res)=>{
                if(err){
                    console.log(err)
                } else {
                    console.log(res)
                    res.subreddit_name = name
                    res.created = Date.now()
                    commit("ADD_SUBREDDIT", res)
                    commit("UPDATE_VIEW_POSTS", res)
                }
            })
        }
    },
    loadMorePosts({commit}, name){
        purple.getSubredditPosts(name, (err, res)=>{
            if(err){
                console.log(err)
            } else {
                console.log(res)
                commit("LOAD_MORE_POSTS", res)
            }
        },{after: state.after})
    }
}

const getters = {
    getViewPosts(state){
        return state.viewPosts
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}