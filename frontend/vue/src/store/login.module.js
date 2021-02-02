// import createHttp from "@/services/http";
// import router from "@/router";
import ApiService from "@/services/api.service";
import JwtService from "@/services/jwt.service";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
  // isAuthenticated: null
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  errors(state) {
    return state.errors;
  },
};

const actions = {
  login(context, credentials) {
    return new Promise((resolve) => {
      ApiService.post("users/login", credentials, "auth")
        .then(({ data }) => {
          console.log(data);
          context.commit("setAuth", data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          // console.log("FAIL LOGIN");
          context.commit("setError", response.data.errors);
        });
    });
  },
  logout(context) {
    context.commit("purgeAuth");
    // location.reload();
  },
  check_auth(context) {
    if (JwtService.getToken()) {
      ApiService.auth();
      ApiService.get("user")
        .then(({ data }) => {
          context.commit("setAuth", data.user);
        })
        .catch(({ response }) => {
          context.commit("purgeAuth");
          location.reload();
          context.commit("setError", response.data.errors);
        });
    } else {
      context.commit("purgeAuth");
    }
  },
};

const mutations = {
  setError(state, error) {
    state.errors = error;
    console.log(state.errors);
  },
  setAuth(state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  purgeAuth(state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
