/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    categories: [],
    films: [],
  },

  actions: {
    loadCategories({ commit }) {
      axios
        .get('https://swapi.co/api/')
        .then((data) => {
          console.log(data.data);
          const categories = Object.keys(data.data);
          console.log(categories);
          commit('SET_CATEGORIES', categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadFilms({ commit }) {
      axios
        .get('https://swapi.co/api/films/')
        .then((data) => {
          console.log(data.data);
          const films = data.data.results;
          commit('SET_FILMS', films);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_FILMS(state, films) {
      state.films = films;
    },
  },
});
