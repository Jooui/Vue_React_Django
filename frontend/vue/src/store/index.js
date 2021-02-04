import { createStore } from "vuex" 
import home from "./home.module";
// import auth from "./auth.module";
import login from "./login.module";
import register from "./register.module";
import exercices from "./exercices.module";


const store = createStore({
    modules: {
        home,
        login,
        register,
        exercices
    }
});

export default store