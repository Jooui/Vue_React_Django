import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import About from "@/views/About.vue";
import User from "@/views/User.vue";
import NotFound from "@/views/NotFound.vue";
import store from "@/store";
// import AuthGuard from "../AuthGuard.js"

const authGuard = (to, from, next) => {
  console.log("entra auth guard");
  console.log(store.getters.isAuthenticated);
  if (store.getters.isAuthenticated) {
    console.log("entra if");
      next();
  } else {
    console.log("entra else");
      next("/login")
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    beforeEnter: authGuard
  },
  {
    path: "/user/:name",
    name: "User",
    component: User,
    props:true
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;