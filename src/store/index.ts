import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageCount: 0,
    currentRoutesLength: 0,
  },
  mutations: {
    SET_PAGE_COUNT(state, number) {
      state.pageCount = number
    },
    SET_ROUTES_LENGTH(state, number) {
      state.currentRoutesLength = number
    }
  },
  actions: {},
  modules: {}
})
