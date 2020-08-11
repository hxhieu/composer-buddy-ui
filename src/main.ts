import './assets/main.css'

import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import {PageHeading} from './components/core'
import {routes} from './routes'

const app = createApp(App)
app.component('PageHeading', PageHeading)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
app.mount('#app')
