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
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: true}
  },

  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {requiresAuth: true}
  },


  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
    // If logged in, or going to the Login page.
    if (to.meta.requiresAuth === true) {
      if (token) {
        // Continue to page.
        next()
      } else {
        // Not logged in, redirect to login.
        next({name: 'Login'})
      }  
    }
    else {
      next()
    }
  }
);

export default router;
