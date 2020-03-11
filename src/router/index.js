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
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
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
  },
  {
    path: '/new5',
    name: 'New5',
    component: () => import(/* webpackChunkName: "new5" */ '../views/New5.vue')
  },
  {
    path: '/new6',
    name: 'New6',
    component: () => import(/* webpackChunkName: "new6" */ '../views/New6.vue')
  },
  {
    path: '/new7',
    name: 'New7',
    component: () => import(/* webpackChunkName: "new7" */ '../views/New7.vue')
  },
  {
    path: '/new8',
    name: 'New8',
    component: () => import(/* webpackChunkName: "new8" */ '../views/New8.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
