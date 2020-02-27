<template>
  <div>
    <h1>Species</h1>
    <p>Select a Species below to view more cool stuff about it!</p>
    <h2 v-for="(singleSpecies, index) in getSpecies" :key="index" @click="setCurrentSpecies(index)">{{ singleSpecies.name }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Species',
  computed: {
    ...mapGetters([
      'getSpecies',
    ]),
  },
  methods: {
    setCurrentSpecies(id) {
      return this.$router.push(`/species/${id}`);
    },
  },
};
</script>

<style>

</style>
