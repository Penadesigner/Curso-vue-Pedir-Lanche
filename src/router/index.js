import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidosView from '../views/PedidosView.vue'
import McView from '../views/McView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: PedidosView
  },
  {
    path: '/mc',
    name: 'mc',
    component: McView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
