import ExercicesService from "@/services/exercices.service.js";

const initialState = {
  exercice: {
    name: "",
    description: "",
    image: "",
    categories: [],
    categories_id: [],
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
  exercice_publish({ state }) {
    console.log(state.exercice);
    return ExercicesService.create(state.exercice);
  },
  exercice_delete(context, slug) {
    return ExercicesService.destroy(slug);
  },
  // [ARTICLE_EDIT]({ state }) {
  //   return ArticlesService.update(state.article.slug, state.article);
  // },
  // [ARTICLE_EDIT_ADD_TAG](context, tag) {
  //   context.commit(TAG_ADD, tag);
  // },
  // [ARTICLE_EDIT_REMOVE_TAG](context, tag) {
  //   context.commit(TAG_REMOVE, tag);
  // },
  exercice_reset_sate({ commit }) {
    commit("reset_sate");
  },
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
  reset_state() {
    Object.assign(state, initialState);
    // for (let f in state) {
    //   Vue.set(state, f, initialState[f]);
    // }
  },
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
};

export default {
  state,
  actions,
  mutations,
  getters,
};
