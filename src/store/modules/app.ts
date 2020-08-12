export interface IAppState {
  apiBaseUrl: string
}

const state: IAppState = {
  apiBaseUrl: 'http://localhost:5880/api',
}

const mutations = {}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
