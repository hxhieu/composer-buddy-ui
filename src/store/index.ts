import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from './modules/auth'
import app from './modules/app'

const debug = process.env.NODE_ENV !== 'production'

const plugins = [
  createPersistedState({
    key: 'composer-buddy',
    paths: ['app', 'auth'],
  }),
]

export default createStore({
  modules: {
    auth,
    app,
  },
  strict: debug,
  plugins: debug ? [...plugins, createLogger()] : plugins,
})
