import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../views/Signup.vue'
import User from '../views/User.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'



const routes = [

  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { guest: true },
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true },
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: true},
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
