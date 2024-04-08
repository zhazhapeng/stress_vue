import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/xz',
      name: 'xiazai',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('../components/Browse.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../components/Search.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../components/Download.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../components/Help.vue')
    },

    {
      path: '/result',
      name: 'result',
      component: () => import('../components/Result.vue')
    },
    {
      path: '/charts',
      name: 'charts',
      component: () => import('../components/Charts.vue')
    },


    {
      path: '/:pathMatch(.*)*',
      // redirect: '/'
      component: HomeView
    }
    ,


    {
      path: '/browse1',
      name: 'browse1',
      component: () => import('../views/BrowseView.vue')
    }
    ,


  ]
})

export default router
