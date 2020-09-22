import { createRouter, createWebHistory } from 'vue-router'

import store from './store'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'
import Project from './views/Project.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
const routes = [
  { path: '/', component: Home, meta: { title: 'Home', auth: true } },
  { path: '/login', component: Login, meta: { title: 'Login' } },
  {
    path: '/project/:name?',
    component: Project,
    props: true, // Seems not working...
    meta: { title: 'Project', auth: true },
  },
  { path: '/:path(.*)', component: NotFound, meta: { title: 'Not Found' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const state = store.state as any
  const { accessToken } = state.auth
  const { auth, title } = to.meta
  document.title = `Composer Buddy - ${title}`
  if (!auth) {
    return next()
  }
  if (!accessToken) {
    return next('/login')
  }
  next()
})

export { router }
