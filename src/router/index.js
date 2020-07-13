import Vue from 'vue'
import VueRouter from 'vue-router'
import Bloodgroup from '../views/Bloodgroup.vue'
import AgeRange from '../views/AgeRange.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Bloodgroup',
    component: Bloodgroup
  },
  {
    path: '/agerange',
    name: 'AgeRange',
    component: AgeRange
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
