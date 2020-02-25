<template>
  <div id="app">
    <h1>Star Wars Info!</h1>
    <router-link to="/">Home</router-link>
    <router-view v-if="dataLoaded"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      dataLoaded: false,
    };
  },
  async mounted() {
    this.loadCategories();
    this.loadFilms();
    this.loadPeople();
    this.loadPlanets();
    this.loadSpecies();
    this.loadStarships();
    await this.loadVehicles();
    this.dataLoaded = true;
  },
  methods: {
    ...mapActions([
      'loadCategories',
      'loadFilms',
      'loadPeople',
      'loadPlanets',
      'loadSpecies',
      'loadStarships',
      'loadVehicles',
    ]),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
