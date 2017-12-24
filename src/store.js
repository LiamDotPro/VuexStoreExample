/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  titleText: "hmm.."
}

const actions = {
  changeHomeText: ({commit}, context) => {
    commit('UPDATE_TEXT', context)
  }
}

const mutations = {
  UPDATE_TEXT(state, text) {
    state.titleText = text
  }
}

const getters = {}

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  actions,
  mutations
})
