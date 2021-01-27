import { createStore } from "vuex" 
import home from "./home.module";
// import auth from "./auth.module";
import login from "./login.module";

const store = createStore({
    modules: {
        home,
        login
    }
});

export default store