import ExercicesService from "@/services/exercices.service.js";

const initialState = {
  exercice: {
    name: "",
    description: "",
    image: "",
    categories: [],
  },
  exercices: [],
  exercicesCount: 0,
};

export const state = { ...initialState };

export const actions = {
  fetch_exercices({ commit }, params) {
    console.log(params.filters);
    commit("fetch_start");
    return ExercicesService.query(params.type, params.filters)
      .then(({ data }) => {
        console.log(data);
        commit("fetch_end", data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  async fetch_exercice(context, exerciceSlug, prevExercice) {
    // avoid extronuous network call if article exists
    if (prevExercice !== undefined) {
      return context.commit("set_exercice", prevExercice);
    }
    const { data } = await ExercicesService.get(exerciceSlug);
    context.commit("set_exercice", data.exercice);
    return data;
  },
  // [ARTICLE_PUBLISH]({ state }) {
  //   return ArticlesService.create(state.article);
  // },
  // [ARTICLE_DELETE](context, slug) {
  //   return ArticlesService.destroy(slug);
  // },
  // [ARTICLE_EDIT]({ state }) {
  //   return ArticlesService.update(state.article.slug, state.article);
  // },
  // [ARTICLE_EDIT_ADD_TAG](context, tag) {
  //   context.commit(TAG_ADD, tag);
  // },
  // [ARTICLE_EDIT_REMOVE_TAG](context, tag) {
  //   context.commit(TAG_REMOVE, tag);
  // },
  // [ARTICLE_RESET_STATE]({ commit }) {
  //   commit(RESET_STATE);
  // }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  set_exercice(state, exercice) {
    state.exercice = exercice;
  },
  fetch_start(state) {
    state.isLoading = true;
  },
  fetch_end(state, data) {
    state.exercices = data.results;
    state.exercicesCount = data.count;
    state.isLoading = false;
  },
  // [SET_COMMENTS](state, comments) {
  //   state.comments = comments;
  // },
  // [TAG_ADD](state, tag) {
  //   state.article.tagList = state.article.tagList.concat([tag]);
  // },
  // [TAG_REMOVE](state, tag) {
  //   state.article.tagList = state.article.tagList.filter(t => t !== tag);
  // },
  // reset_state() {
  //   for (let f in state) {
  //     Vue.set(state, f, initialState[f]);
  //   }
  // }
};

const getters = {
  exercice(state) {
    return state.exercice;
  },
  exercicesCount(state) {
    return state.exercicesCount;
  },
  exercices(state) {
    return state.exercices;
  },
  isLoading(state) {
    return state.isLoading;
  },
  tags(state) {
    return state.tags;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
