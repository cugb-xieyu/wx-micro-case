import Vue from 'vue'
import Vuex from 'vuex'

import counterState from './modules/counter-state'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    counterState
  }
})

export default store
