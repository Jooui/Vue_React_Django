const state = {
    errors: null,
    user: {},
    isAuthenticated: "!!JwtService.getToken()"
};

const getters = {
    currentUser(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
};

const actions = {
    login(context,credentials) {
        console.log(credentials);
        return credentials
        // return new Promise(resolve => {
        //   ApiService.post("users/login", { user: credentials })
        //     .then(({ data }) => {
        //       context.commit(SET_AUTH, data.user);
        //       resolve(data);
        //     })
        //     .catch(({ response }) => {
        //       context.commit(SET_ERROR, response.data.errors);
        //     });
        // });
      },
}

export default {
    state,
    actions,
    // mutations,
    getters
};