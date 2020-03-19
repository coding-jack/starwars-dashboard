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
      let planets = [];

      axios('https://swapi.co/api/planets/')
        .then((response) => {
          // collect people from first page
          planets = response.data.results;
          return response.data.count;
        })
        .then((count) => {
          // exclude the first request
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          const promises = [];
          // start at 2 as you already queried the first page
          for (let i = 2; i <= numberOfPagesLeft; i += 1) {
            promises.push(axios(`https://swapi.co/api/planets?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then((response) => {
          // get the rest records - pages 2 through n.
          planets = response.reduce((acc, data) => [...acc, ...data.data.results], planets);
          commit('SET_PLANETS', planets);
        })
        .catch(error => console.log(error));
    },
    loadSpecies({ commit }) {
      let species = [];

      axios('https://swapi.co/api/species/')
        .then((response) => {
          // collect people from first page
          species = response.data.results;
          return response.data.count;
        })
        .then((count) => {
          // exclude the first request
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          const promises = [];
          // start at 2 as you already queried the first page
          for (let i = 2; i <= numberOfPagesLeft; i += 1) {
            promises.push(axios(`https://swapi.co/api/species?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then((response) => {
          // get the rest records - pages 2 through n.
          species = response.reduce((acc, data) => [...acc, ...data.data.results], species);
          commit('SET_SPECIES', species);
        })
        .catch(error => console.log(error));
    },
    loadStarships({ commit }) {
      let starships = [];

      axios('https://swapi.co/api/starships/')
        .then((response) => {
          // collect people from first page
          starships = response.data.results;
          return response.data.count;
        })
        .then((count) => {
          // exclude the first request
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          const promises = [];
          // start at 2 as you already queried the first page
          for (let i = 2; i <= numberOfPagesLeft; i += 1) {
            promises.push(axios(`https://swapi.co/api/starships?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then((response) => {
          // get the rest records - pages 2 through n.
          starships = response.reduce((acc, data) => [...acc, ...data.data.results], starships);
          commit('SET_STARSHIPS', starships);
        })
        .catch(error => console.log(error));
    },
    loadVehicles({ commit }) {
      let vehicles = [];

      axios('https://swapi.co/api/vehicles/')
        .then((response) => {
          // collect people from first page
          vehicles = response.data.results;
          return response.data.count;
        })
        .then((count) => {
          // exclude the first request
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          const promises = [];
          // start at 2 as you already queried the first page
          for (let i = 2; i <= numberOfPagesLeft; i += 1) {
            promises.push(axios(`https://swapi.co/api/vehicles?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then((response) => {
          // get the rest records - pages 2 through n.
          vehicles = response.reduce((acc, data) => [...acc, ...data.data.results], vehicles);
          commit('SET_VEHICLES', vehicles);
        })
        .catch(error => console.log(error));
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
