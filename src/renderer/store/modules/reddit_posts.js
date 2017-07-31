import '@/assets/purple'

const state = {
    after: null,
    before: null,
    viewPosts:[],
    subreddits:[],
    current: "loading",
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
    },
    UPDATE_CURRENT (state, name){
        state.current = name
    },
    EXPAND_POST(state, index){
        if(state.viewPosts[index].expanded){
            state.viewPosts[index].expanded = false
        } else {
            state.viewPosts[index].expanded = true
        }
        console.log(state.viewPosts[index].expanded)
    },
    EXPAND_COMMENTS(state, index){
        state.viewPosts[index].expand_comments = !state.viewPosts[index].expand_comments 
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
                commit("UPDATE_CURRENT", name)
            }
        }, this)
        if(exists === false){
            purple.getSubredditPosts(name, (err, res)=>{
                if(err){
                    console.log(err)
                } else {
                    console.log(res)
                    res.posts.forEach((n)=>{
                        n.expanded = false
                        n.expand_comments = false
                    },this)
                    res.subreddit_name = name
                    res.created = Date.now()
                    commit("ADD_SUBREDDIT", res)
                    commit("UPDATE_VIEW_POSTS", res)
                    commit("UPDATE_CURRENT", name)
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
    },
    expandPost({commit ,state}, index){
       let post = state.viewPosts[index]
       if(post.data.preview || post.data.is_self && post.kind === "link"){
            commit("EXPAND_POST", index)
       }
    },
    expandComments({commit}, index){
        commit("EXPAND_COMMENTS", index)
    }
}

const getters = {
    getViewPosts(state){
        return state.viewPosts
    },
    getCurrentTitle(state){
        return state.current
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}