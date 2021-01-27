import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

createApp(App).use(router).mount('#app')

// const app = createApp({
//     router,
//     render: h => h(App)
//   });

//   app.mount('#app');
