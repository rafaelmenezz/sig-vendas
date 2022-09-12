import { createRouter, createWebHistory } from 'vue-router'
import SigHome from '../views/SigHome.vue'
import SigOperadores from '../views/SigOperadores.vue'
import SigSetores from '../views/SigSetores.vue'
import SigPerfil from '../views/SigPerfil.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: SigHome
  },
  {
    path: '/operadores',
    name: 'Operadores',
    component: SigOperadores
  },
  {
    path: '/setores',
    name: 'Setores',
    component: SigSetores
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: SigPerfil
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
