import TrainingsService from "@/services/trainings.service.js";

const initialState = {
  training: {
    name: "",
    description: "",
    image: "",
    categories: [],
    verified: false,
    difficulties:[]
  },
  trainings: [],
  trainingsCount: 0,
};

export const state = { ...initialState };

export const actions = {
  fetch_trainings({ commit }, params) {
    console.log(params.filters);
    commit("fetch_start");
    return TrainingsService.query(params.type, params.filters)
      .then(({ data }) => {
        console.log(data);
        commit("fetch_end", data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  async fetch_training(context, trainingSlug, prevTraining) {
    console.log(trainingSlug);
    if (prevTraining !== undefined) {
      return context.commit("set_training", prevTraining);
    }
    const { data } = await TrainingsService.get(trainingSlug);
    context.commit("set_training", data);
    return data;
  },
  training_publish({ state }) {
    console.log(state.training);
    return TrainingsService.create(state.training);
  },
  training_delete(context, slug) {
    return TrainingsService.destroy(slug);
  },
  training_reset_sate({ commit }) {
    commit("reset_sate");
  },

  //Favorite exercices

  favorite_training(context, payload) {
    return TrainingsService.favorite(payload).then(({ data }) => {
      context.commit("set_training", data.training);
      return data;
    });
  },
  unfavorite_training(context, payload) {
    return TrainingsService.unfavorite(payload).then(({ data }) => {
      context.commit("set_training", data.training);
      return data;
    });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  set_training(state, training) {
    state.training = training;
  },
  fetch_start(state) {
    state.isLoading = true;
  },
  fetch_end(state, data) {
    state.trainings = data.results;
    state.trainingsCount = data.count;
    state.isLoading = false;
  },
  reset_state() {
    Object.assign(state, initialState);
  },
};

const getters = {
  training(state) {
    return state.training;
  },
  trainingsCount(state) {
    return state.trainingsCount;
  },
  trainings(state) {
    return state.trainings;
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
