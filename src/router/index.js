import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Produto from '@/views/Produto.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: Produto,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    return window.scrollTo({top:0, behavior:"smooth"})
  }
})

export default router
