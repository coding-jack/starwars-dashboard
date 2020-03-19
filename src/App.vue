<template>
  <div id="app">
    <div class="container" v-if="dataLoaded">
      <h1>Star Wars Info!</h1>
      <router-view/>
    </div>
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
    await this.loadPeople();
    await this.loadPlanets();
    await this.loadSpecies();
    await this.loadStarships();
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
