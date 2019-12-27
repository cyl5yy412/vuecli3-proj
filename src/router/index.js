import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 引入 自定义主页,First为views里的 ,而不是components里的
import First from '../views/First.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'First',
    component: First
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
