import { createWebHistory, createRouter } from "vue-router";
// import { defineAsyncComponent } from 'vue';
import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";
import Register from "@/views/login/Register.vue";
import About from "@/views/about/About.vue";
import Profile from "@/views/profile/Profile.vue";
import ExerciceUpload from "@/views/exercices/ExerciceUpload.vue";
import Trainings from "@/views/trainings/Trainings.vue";
import TrainingsDetails from "@/views/trainings/TrainingsDetails.vue";
import TrainingUpload from "@/views/trainings/TrainingUpload.vue";

import NotFound from "@/views/NotFound.vue";

// const Home = defineAsyncComponent(() => import("@/views/Home.vue"));
// const Login = defineAsyncComponent(() => import("@/views/Login.vue"));
// const Register = defineAsyncComponent(() => import("@/views/Register.vue"));
// const About = defineAsyncComponent(() => import("@/views/About.vue"));
// const Profile = defineAsyncComponent(() => import("@/views/Profile.vue"));
// const ExerciceUpload = defineAsyncComponent(() => import("@/views/ExerciceUpload.vue"));
// const TrainingsDetails = defineAsyncComponent(() => import("@/views/TrainingsDetails.vue"));
// const Trainings = defineAsyncComponent(() => import("@/views/Trainings.vue"));
// const NotFound = defineAsyncComponent(() => import("@/views/NotFound.vue"));

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
  {
    path: "/trainings/upload",
    name: "TrainingUpload",
    component: TrainingUpload,
    beforeEnter: authGuard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
