import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import About from "@/views/About.vue";
import Profile from "@/views/Profile.vue";
import ExerciceUpload from "@/views/ExerciceUpload.vue";
import Trainings from "@/views/Trainings.vue";
import TrainingsDetails from "@/views/TrainingsDetails.vue";



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
    beforeEnter: authGuard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/@:username",
    name: "UsersProfile",
    component: Profile,
  },
  {
    path: "/exercices/upload",
    name: "ExerciceUpload",
    component: ExerciceUpload,
    beforeEnter: authGuard,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  {
    path: "/trainings",
    name: "Trainings",
    component: Trainings,
  },
  {
    path: "/trainings/:training",
    name: "TrainingDetails",
    component: TrainingsDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
