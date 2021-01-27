const state = {
    tags: [],
    articles: [],
    isLoading: true,
    articlesCount: 0,
    data: "test"
};

const getters = {
    articlesCount(state) {
        return state.articlesCount;
    },
    articles(state) {
        return state.articles;
    },
    isLoading(state) {
        return state.isLoading;
    },
    tags(state) {
        return state.tags;
    },
    data(state){
        return state.data
    }
};

const mutations = {
    mutateChangeData: function (state, payload) {
        state.data = payload
     }
  };

const actions = {
    updatedataAction: function ({commit}, payload) {
        commit("mutateChangeData", payload)
    }
}



export default {
    state,
    getters,
    mutations,
    actions
  };