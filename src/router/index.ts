import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/containers/Home.vue'
import Album from '@/containers/Album.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/album',
      name: 'album',
      component: Album
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/containers/About.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/containers/post/Post.vue')
    },
    {
      path: '/posts/:id',
      name: 'post_item',
      component: () => import('@/containers/post/PostItem.vue')
    }
  ]
})

export default router
