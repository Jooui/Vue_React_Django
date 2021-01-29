import { createApp } from 'vue'

import store from "./store/index"
import App from './App.vue'
import router from './router'
import './App.css';

//get user info when load page (IMPORTANT next() instanciat sino === infinite loop :( )
router.beforeEach((to, from, next) => {
  Promise.all([store.dispatch("check_auth")]).then(next())
  checkHeader(to)
});

let checkHeader = (to) => {
  console.log(to);
  let navbar = document.getElementById('navbar')
  if ( to.fullPath == '/login' || to.fullPath == '/register'  ){
    navbar.style.display = 'none'
  }else{
    navbar.style.display = 'flex'
  }
}

createApp(App).use(store).use(router).mount('#app')
