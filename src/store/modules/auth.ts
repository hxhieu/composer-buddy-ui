import { Commit } from 'vuex'
import { useHttpClient } from '../../composables/useHttpClient'
import { ILoginRequest } from '../../models'
import { AUTH_SET_TOKEN } from '../types'

const { post } = useHttpClient()

export interface IAuthState {
  accessToken: string
}

const state: IAuthState = {
  accessToken: '',
}

const mutations = {
  [AUTH_SET_TOKEN]: (state: IAuthState, accessToken: string) => {
    state.accessToken = accessToken
  },
}

const actions = {
  login: async (
    { commit }: { commit: Commit },
    { user, password }: { user: string; password: string }
  ) => {
    const accessToken = await post<String, ILoginRequest>('auth/login', {
      user,
      password,
    })
    commit(AUTH_SET_TOKEN, accessToken)
  },
  logout: ({ commit }: { commit: Commit }) => {
    commit(AUTH_SET_TOKEN, '')
  },
}

const getters = {
  isAuthenticated: (state: IAuthState) => !!state.accessToken,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
