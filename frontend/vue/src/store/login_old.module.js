import createHttp from "@/services/http";
import router from "@/router";

const state = {
  token: "",
  expiration: Date.now(),
  isBusy: false,
  error: null
};

const getters = {
  // currentUser(state) {
  //   return state.user;
  // },
  // isAuthenticated(state) {
  //   return state.isAuthenticated;
  // }

  isAuthenticated: (state) => state.token.length > 0 && state.expiration > Date.now()
};

const actions = {
  login: async ({ commit }, model) => {
    try {
      commit("setBusy");
      commit("clearError");
      const http = createHttp(false); // unsecured
      // http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      const result = await http.post("http://localhost:8000/api/users/login", model)
      console.log(result);
      if (result.data.user.token){
         console.log("logged");
      }else{
        console.log("FAILED TO LOGIN");
      }
      // if (result.data.success) {
      //   commit("setToken", result.data);
      //   router.push("/");
      // }
      // else {
      //   console.log("else");
      //   commit("setError", "Authentication Failed");
      // }
    } catch {
      console.log("Catch");
      commit("setError", "Failed to login");
    } finally {
      console.log("Finally");

      commit("clearBusy");
    }
  },
  logout: ({ commit }) => {
    commit("clearToken");
    router.push("/");
  }
}

const mutations = {
  setBusy: (state) => state.isBusy = true,
  clearBusy: (state) => state.isBusy = false,
  setError: (state, error) => state.error = error,
  clearError: (state) => state.error = "",
  setToken: (state, model) => {
    state.token = model.token;
    state.expiration = new Date(model.expiration)
  },
  clearToken: (state) => {
    state.token = "";
    state.expiration = Date.now();
  }
}

// export default {
//   state,
//   actions,
//   mutations,
//   getters
// };