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
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  },

  getters: {
    getPeople: state => state.people,
    getPlanets: state => state.planets,
    getFilms: state => state.films,
    getSpecies: state => state.species,
    getVehicles: state => state.vehicles,
    getStarships: state => state.starships,
  },

  actions: {
    loadCategories({ commit }) {
      axios
        .get('https://swapi.co/api/')
        .then((data) => {
          const categories = Object.keys(data.data);
          commit('SET_CATEGORIES', categories);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
    loadFilms({ commit }) {
      axios
        .get('https://swapi.co/api/films/')
        .then((data) => {
          const films = (data.data.results);
          console.log(data);


          commit('SET_FILMS', films);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
    loadPeople({ commit }) {
      let people = [];

      axios('https://swapi.co/api/people/')
        .then((response) => {
          // collect people from first page
          people = response.data.results;
          return response.data.count;
        })
        .then((count) => {
          // exclude the first request
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          const promises = [];
          // start at 2 as you already queried the first page
          for (let i = 2; i <= numberOfPagesLeft; i += 1) {
            promises.push(axios(`https://swapi.co/api/people?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then((response) => {
          // get the rest records - pages 2 through n.
          people = response.reduce((acc, data) => [...acc, ...data.data.results], people);
          commit('SET_PEOPLE', people);
        })
        .catch(error => console.log(error));
    },
    loadPlanets({ commit }) {
      axios
        .get('https://swapi.co/api/planets/')
        .then((data) => {
          const planets = data.data.results;
          commit('SET_PLANETS', planets);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
    loadSpecies({ commit }) {
      axios
        .get('https://swapi.co/api/species/')
        .then((data) => {
          const species = data.data.results;
          commit('SET_SPECIES', species);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
    loadStarships({ commit }) {
      axios
        .get('https://swapi.co/api/starships/')
        .then((data) => {
          const starships = data.data.results;
          commit('SET_STARSHIPS', starships);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
    loadVehicles({ commit }) {
      axios
        .get('https://swapi.co/api/vehicles/')
        .then((data) => {
          const vehicles = data.data.results;
          commit('SET_VEHICLES', vehicles);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
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
    SET_PEOPLE(state, people) {
      state.people = people;
    },
    SET_PLANETS(state, planets) {
      state.planets = planets;
    },
    SET_SPECIES(state, species) {
      state.species = species;
    },
    SET_STARSHIPS(state, starships) {
      state.starships = starships;
    },
    SET_VEHICLES(state, vehicles) {
      state.vehicles = vehicles;
    },
  },
});
