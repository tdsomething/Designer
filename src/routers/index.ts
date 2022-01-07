import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

const LoginViewRoute = () => import('@/views/login/LoginView.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginViewRoute }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
