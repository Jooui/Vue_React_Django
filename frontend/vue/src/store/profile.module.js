import ProfileService from "@/services/profile.service.js";

const initialState = {
  profile: {},
};

export const state = { ...initialState };

export const actions = {
  update_user({ commit }, params) {
    commit("fetch_start");
    return ProfileService.update(params.user)
      .then(({ data }) => {
        commit("fetch_end", data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  follow_profile(context, payload) {
    return ProfileService.follow(payload).then(({ data }) => {
      context.commit("set_profile", data.profile);
      return data;
    });
  },
  unfollow_profile(context, payload) {
    return ProfileService.unfollow(payload).then(({ data }) => {
      context.commit("set_profile", data.profile);
      return data;
    });
  },
  async fetch_profile(context, payload) {
    return ProfileService.get(payload).then(({ data }) => {
      context.commit("set_profile", data.profile);
      return data;
    });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  fetch_start(state) {
    state.isLoading = true;
  },
  fetch_end(state, data) {
    console.log(data);
  },
  set_profile(state, profile) {
    state.profile = profile;
    state.errors = {};
  },
};

const getters = {
  profile(state) {
    return state.profile;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
