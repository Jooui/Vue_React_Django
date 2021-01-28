import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import About from "@/views/About.vue";
import Profile from "@/views/Profile.vue";
import NotFound from "@/views/NotFound.vue";
import authGuard from "@/common/AuthGuard";


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
    // beforeEnter: authGuard
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    // beforeEnter: authGuard
  },
  {
    path: "/about",
    name: "About",
    component: About,
    beforeEnter: authGuard
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard
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