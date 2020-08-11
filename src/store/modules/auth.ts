export interface IAuthStore {
  accessToken: string
}

const state: IAuthStore = {
  accessToken: '',
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
