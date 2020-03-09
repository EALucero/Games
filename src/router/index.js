import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/new1',
    name: 'New1',
    component: () => import(/* webpackChunkName: "new1" */ '../views/New1.vue')
  },
  {
    path: '/new2',
    name: 'New2',
    component: () => import(/* webpackChunkName: "new2" */ '../views/New2.vue')
  },
  {
    path: '/new3',
    name: 'New3',
    component: () => import(/* webpackChunkName: "new3" */ '../views/New3.vue')
  },
  {
    path: '/new4',
    name: 'New4',
    component: () => import(/* webpackChunkName: "new4" */ '../views/New4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
