import Vue from 'vue'
import VueRouter from 'vue-router'
import session from '../models/session'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/users', 
    name: 'Users', 
    component:  () => import(/* webpackChunkName: "signup" */ '../views/Users.vue'),
    beforeEnter: checkSessionUser,

  },
  { 
    path: '/signup', 
    name: 'SignUp', 
    component:  () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contactus" */ '../views/ContactUs.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { 
    path: '/fitness-tracker', 
    name: 'FitnessTracker', 
    component:  () => import(/* webpackChunkName: "signup" */ '../views/FitnessTracker.vue'),
    beforeEnter: checkSessionUser,
  },
  { 
    path: '/water-tracker', 
    name: 'WaterTracker', 
    component:  () => import(/* webpackChunkName: "signup" */ '../views/WaterTracker.vue'),
    beforeEnter: checkSessionUser,
  },
  { 
    path: '/exercises', 
    name: 'Exercises', 
    component:  () => import(/* webpackChunkName: "signup" */ '../views/Exercises.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function checkSessionUser (to, from, next) {
  if(session.user){
    next();
  }else{
    next('Login');
  }
}