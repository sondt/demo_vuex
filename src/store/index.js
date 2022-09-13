import Vue from 'vue'
import Vuex from 'vuex'
import sharedMutations from 'vuex-shared-mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'John Doe',
  },
  getters: {
    getName: state => {
      return state.name
    }
  },
  mutations: {
    setName: (state, payload) => {
      state.name = payload
    }
  },
  actions: {
    setName: ({ commit }, payload) => {
      commit('setName', payload)
    }
  },
  dispatch: {
    setName: ({ commit }, payload) => {
      commit('setName', payload)
    }
  },
  modules: {

  },
  plugins: [sharedMutations({ predicate: ['setName'] })],
})
