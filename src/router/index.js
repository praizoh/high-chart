import Vue from 'vue'
import VueRouter from 'vue-router'
import Bloodgroup from '../views/Bloodgroup.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Bloodgroup',
    component: Bloodgroup
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
