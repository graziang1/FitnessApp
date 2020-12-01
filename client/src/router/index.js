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
  { path: '/users', name: 'Users', component: Users },

  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/contactus', name: 'ContactUs', component: ContactUs },
  { path: '/about', name: 'About', component: About },
  { path: '/fitness-tracker', name: 'FitnessTracker', component: FitnessTracker, beforeEnter: checkSessionUser },
  { path: '/water-tracker', name: 'WaterTracker', component: WaterTracker, beforeEnter: checkSessionUser },
  { path: '/exercises', name: 'Exercises', component: Exercises },
  { path: '/users', name: 'Users', component: Users, beforeEnter: checkSessionUser }
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