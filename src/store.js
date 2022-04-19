import { createStore } from 'vuex';
import { loadCities } from './api/server';

export default createStore({
  state: {
    cities: [],
  },
  getters: {
    cities: (state) => state.cities,

  },
  mutations: {
    setCities(state, cities) {
      state.cities = cities;
    },

  },
  actions: {
    async loadCities(store) {
      const cities = await loadCities();
      store.commit('setCities', cities);
    },

  },

});
