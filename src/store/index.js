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
    posts: [],
    films: [],
  },

  actions: {
    loadPosts({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          console.log(data.data);
          const posts = data.data;
          commit('SET_POSTS', posts);
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
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_FILMS(state, films) {
      state.films = films;
    },
  },
});
