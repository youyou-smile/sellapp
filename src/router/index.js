import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/goods'
  },
  {
    path: '/',
    component: Index,
    children: [
      { path: '/goods', component: () => import('../views/Goods.vue') },
      { path: '/seller', component: () => import('../views/Seller.vue') },
      { path: '/evaluate', component: () => import('../views/Evaluate.vue') },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
