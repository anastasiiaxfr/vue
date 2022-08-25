import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Faq from '../views/Faq.vue'
import Brands from '../views/Brands.vue'
import Policy from '../views/Policy.vue'
import Terms from '../views/Terms.vue'
import Partners from '../views/Partners.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/brands',
    name: 'Brands',
    component: Brands
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/policy',
    name: 'Policy',
    component: Policy
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  
]

const router = new VueRouter({
  mode: 'history',
 
  base: process.env.BASE_URL,

 
  routes
})

export default router
