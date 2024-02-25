import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    }
    ,
    {
      path: '/browse',
      name: 'browse',
      component: () => import('../views/BrowseView.vue')
    }
    ,
    {
      path: '/down',
      name: 'dowm',
      component: () => import('../views/DownView.vue')
    }
    ,
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    }
    ,
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/ResultView.vue')
    }
  ]
})

export default router
