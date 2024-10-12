import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ProductPage from '../components/ProductPage.vue'
import CartPage from '../components/CartPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/product/:id', component: ProductPage },
  { path: '/cart', component: CartPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
