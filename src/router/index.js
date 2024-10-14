import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import("@/layouts/LayoutFull.vue"),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import("@/views/products/HomeView.vue"),
        },
        {
          path: '/product',
          name: 'product',
          component: () => import("@/views/products/ProductView.vue"),
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/profile/ProfileView.vue'),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/SignUpView.vue')
    }
  ]
})

export default router
