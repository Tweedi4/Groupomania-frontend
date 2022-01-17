import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../views/Signup.vue'
import User from '../views/User.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'


const routes = [

  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/user',
    name: 'User',
    component: User
  },


  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router;
