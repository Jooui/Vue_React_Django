import { createApp } from 'vue'
import store from "./store/index"
import App from './App.vue'
import router from './router'

createApp(App).use(store).use(router).mount('#app')

// const app = createApp({
//     router,
//     IonicVue,
//     render: h => h(App)
//   });

// app.mount('#app');
