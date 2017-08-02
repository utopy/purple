import '@/assets/purple'

const state = {
    postComments: [],
    cached: []
}

const mutations = {
    UPDATE_POST_COMMENTS(state, res){
        console.log(res)
        state.postComments = [...res.children]
    },
    CLEAR_COMMENTS(state){
        state.postComments = []
    }
}

const actions = {
    loadComments({commit}, permalink){
        purple.getPostComments(permalink, (err, res)=>{
            let comments = res[1].data;
            commit("CLEAR_COMMENTS")
            commit("UPDATE_POST_COMMENTS", comments)
        })
    },
    clearComments({commit}){
        commit("CLEAR_COMMENTS")
    }
}

const getters = {
    getPostComments(state){
        return state.postComments
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}