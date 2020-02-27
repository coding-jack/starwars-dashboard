<template>
  <div>
    <h1>StarShips</h1>
    <p>Fly into all the cool facts by choosing a Starship below!</p>
    <h2 v-for="(starship, index) in getStarships" :key="index" @click="getCurrentStarship(index)">{{ starship.name }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Starships',

  computed: {
    ...mapGetters([
      'getStarships',
    ]),
  },

  methods: {
    getCurrentStarship(id) {
      return this.$router.push(`/starships/${id}`);
    },
  },
};
</script>

<style>

</style>
