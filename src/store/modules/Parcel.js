
// initial state
const state = () => ({
  items: []
})

// getters
const getters = {
    items: (state) => state.items,
}

// actions
const actions = {
setParcel({ commit }, item) {
            
    commit('setItem', item)
  }
}

// mutations
const mutations = {
  setItem (state, item) {
    state.items.push(item)
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}