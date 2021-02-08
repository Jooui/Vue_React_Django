import ProfileService from "@/services/profile.service.js";

const initialState = {
  profile: {}
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
  fetch_profile(context, payload) {
    const { username } = payload;
    console.log("FETCH PROFILE");
    console.log(username);
    return ProfileService.get(username)
      .then(({ data }) => {
        context.commit("set_profile", data.profile);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(SET_ERROR, response.data.errors)
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
  }

};

const getters = {
  profile(state) {
    return state.profile;
  }
};

export default {
  state,
  actions,
  mutations,
  getters,
};
