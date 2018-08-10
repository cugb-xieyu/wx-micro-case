const state = {
  count: 0
}
const mutations = {
  increment: (state) => {
    const obj = state
    obj.count += 1
  },
  decrement: (state) => {
    const obj = state
    obj.count -= 1
  }
}
const actions = {
  increment ({commit}) {
    commit('increment')
  },
  decrement ({commit}) {
    commit('decrement')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
