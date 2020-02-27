<template>
  <div>
    <h1>Planets</h1>
    <p>Select a Planet below to view more info on it!</p>
    <h2 v-for="(planet, index) in getPlanets" :key="index" @click="setCurrentPlanet(index)">{{ planet.name }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Planets',
  computed: {
    ...mapGetters([
      'getPlanets',
    ]),
  },
  methods: {
    setCurrentPlanet(id) {
      return this.$router.push(`/planets/${id}`);
    },
  },
};
</script>

<style>

</style>
