// import createHttp from "@/services/http";
// import router from "@/router";
import ApiService from '@/services/api.service'
// import JwtService from "@/services/jwt.service";

const state = {
  errors: null,
};

const getters = {
  errors(state){
    return state.errors;
  }
};

const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      ApiService.post("users", credentials, 'auth')
        .then(({ data }) => {
          console.log(data);
          context.commit('setAuth', data.user);
          resolve(data);
        })
        .catch(({response} ) => {
          context.commit('setError', response.data.errors);
        });
    });
  }
}

const mutations = {
  setError(state, error) {
    state.errors = error;
    console.log(state.errors);
  },
}

export default {
  state,
  actions,
  mutations,
  getters
};