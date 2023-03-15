import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/containers/Home.vue'
import Contact from '@/containers/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/containers/About.vue')
    }
  ]
})

export default router
