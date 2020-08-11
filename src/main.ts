import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { PageHeading } from './components/core'
import { router } from './router'
import store from './store'

const app = createApp(App)
app.component('PageHeading', PageHeading)

app.use(store)
app.use(router)
app.mount('#app')
