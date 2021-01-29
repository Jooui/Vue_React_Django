import { createApp } from 'vue'

import store from "./store/index"
import App from './App.vue'
import router from './router'
import './App.css';

//get user info when load page (IMPORTANT next() instanciat sino === infinite loop :( )
router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch("check_auth")]).then(next())
);

createApp(App).use(store).use(router).mount('#app')
