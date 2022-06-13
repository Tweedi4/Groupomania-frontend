import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from "axios";



axios.create({
    baseURL: 'http://localhost:3000/api',
  })



createApp(App).use(store).use(router).mount('#app')