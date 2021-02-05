const state = {
  tags: [],
  articles: [],

  articlesCount: 0,
  data: "test",
};

const getters = {
  articlesCount(state) {
    return state.articlesCount;
  },
  articles(state) {
    return state.articles;
  },
  tags(state) {
    return state.tags;
  },
  data(state) {
    return state.data;
  },
};

const mutations = {
  mutateChangeData: function(state, payload) {
    state.data = payload;
  },
};

const actions = {
  updatedataAction: function({ commit }, payload) {
    commit("mutateChangeData", payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
