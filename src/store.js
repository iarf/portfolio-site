import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		heroPage: 'About'
	},
	mutations: {
		heroNav(state,page){
			state.heroPage = page
		}
	}
})
