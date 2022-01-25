import { createRouter, createWebHistory } from 'vue-router'
import Services from '../views/Services.vue'
import Cart from '../views/Cart.vue'
import Main from "../views/Main";
import About from "../views/About";
import Contacts from "../views/Contacts";

const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/services', name: 'Services', component: Services },
  { path: '/about', name: 'About', component: About },
  { path: '/contacts', name: 'Contacts', component: Contacts },
  { path: '/cart', name: 'Cart', component: Cart }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
