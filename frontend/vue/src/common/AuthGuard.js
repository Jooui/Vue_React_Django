import store from "@/store";

const authGuard = async (to, from, next) => {
    if (store.getters.isAuthenticated) {
        await next();
    } else {
        next("/login")
    }
};

export default authGuard