import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreView from '../views/SobreView.vue'
import ContatoView from '../views/ContatoView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/sobre', name: 'sobre', component: SobreView },
  { path: '/contato', name: 'contato', component: ContatoView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router