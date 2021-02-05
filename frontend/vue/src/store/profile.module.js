import ProfileService from "@/services/profile.service.js";

const initialState = {

};

export const state = { ...initialState };

export const actions = {
  update_user({ commit }, params) {
    console.log("HOLAAAAAAAAA");
    console.log(params);
    commit("fetch_start");
    return ProfileService.update(params.user)
      .then(({ data }) => {
        console.log(data);
        commit("fetch_end", data);
      })
      .catch((error) => {
        throw new Error(error);
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

};

const getters = {

};

export default {
  state,
  actions,
  mutations,
  getters,
};
