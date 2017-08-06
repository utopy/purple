import '@/assets/purple'

const state = {
    after: null,
    before: null,
    oldComments: 0,
    viewPosts:[],
    subreddits:[],
    savedPosts: [],
    current: "loading",
    isLoading: false
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
        state.current = res.subreddit_name
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
        console.log(state.oldComments)
        state.viewPosts.forEach((p)=>{
            p.expand_comments = false
        },this)

        if(state.viewPosts[index].expand_comments){
            state.viewPosts[index].expand_comments = false
            console.log("true")
        }  else {
            state.viewPosts[index].expand_comments = true
            console.log('false')
        }
        state.oldComments = index
    },
    LOAD_SAVED_POSTS(state){
        state.viewPosts = [...state.savedPosts]
        state.current = 'Saved Posts'
    },
    SAVE_POST(state, index){
        state.savedPosts.push(state.viewPosts[index])
    },
    CHANGE_LOADING_STATE(state){
        state.isLoading = !state.isLoading
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
    loadMorePosts({commit}){
        commit("CHANGE_LOADING_STATE")
        purple.getSubredditPosts(state.current, (err, res)=>{
            if(err){
                console.log(err)
            } else {
                console.log(res)
                commit("LOAD_MORE_POSTS", res)
                commit("CHANGE_LOADING_STATE")

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
        console.log(index)
        commit("EXPAND_COMMENTS", index)
    },
    savePost({commit}, index){
        commit("SAVE_POST", index)
    },
    getSavedPosts({commit}){
        commit("LOAD_SAVED_POSTS")
    }
}

const getters = {
    getViewPosts(state){
        return state.viewPosts
    },
    getCurrentTitle(state){
        return state.current
    },
    getSavedPostsLength(state){
        return state.savedPosts.length
    },
    getSavedPosts(state){
        return state.savedPosts
    },
    getLoadingState(state){
        return state.isLoading
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}