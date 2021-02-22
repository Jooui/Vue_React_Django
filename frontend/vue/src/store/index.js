import { createStore } from "vuex" 
import home from "./home.module";
// import auth from "./auth.module";
import login from "./login.module";
import register from "./register.module";
import exercices from "./exercices.module";
import trainings from "./trainings.module";
import profile from "./profile.module"


const store = createStore({
    modules: {
        home,
        login,
        register,
        exercices,
        trainings,
        profile
    }
});

export default store