import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Creamos un Guard que tendrá efecto antes de acceder a cada ruta con beforeEach()
/*
to: Hacia donde quiero ir
from: De donde vengo
next: A donde mandamos segun cumpla las condiciones
*/
router.beforeEach((to, from, next) => {
  // Recogeriamos la informacion dependiendo del metodo de guardado elegido(store,cookies,session,etc...)
  // const auth = $session.get('jwt') != null
  // En auth recogeremos si el usuario está logeado,por ahora ponemos manualmente.
  const auth = true

  // Comprobamos si a la ruta hacia donde quiere ir necesita o no autenticacion
  const needAuth = to.meta.requireAuth

  // Hacemos comprobaciones para ver donde enviamos
  // Si necesita autenticacion y no está autenticado le enviamos a login,si no seguimos y enviamos a donde quiere ir
  if (needAuth && !auth) {
    next('login')
  } else {
    next()
  }


})
export default router
