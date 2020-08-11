import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
const routes = [
  { path: '/', component: Home, meta: { title: 'Home', auth: true } },
  { path: '/login', component: Login, meta: { title: 'Login' } },
  { path: '/:path(.*)', component: NotFound, meta: { title: 'Not Found' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const state = store.state as any
  const { accessToken } = state.auth
  const { auth } = to.meta
  if (!auth) return next()
  if (!accessToken) return next('/login')
  next()
})

export { router }
