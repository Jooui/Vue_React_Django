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
  exercice_reset_sate({ commit }) {
    commit("reset_sate");
  },

  //Favorite exercices

  favorite_exercice(context, payload) {
    return ExercicesService.favorite(payload).then(({ data }) => {
      context.commit("set_exercice", data.exercice);
      return data;
    });
  },
  unfavorite_exercice(context, payload) {
    return ExercicesService.unfavorite(payload).then(({ data }) => {
      context.commit("set_exercice", data.exercice);
      return data;
    });
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
