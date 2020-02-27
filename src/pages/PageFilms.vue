<template>
  <div>
    <h1>Films</h1>
    <h2 v-for="(film, index) in getFilms" :key="index" @click="setCurrentFilm(index)"> {{ film.title }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Films',
  computed: {
    ...mapGetters([
      'getFilms',
    ]),
  },
  methods: {
    setCurrentFilm(id) {
      return this.$router.push(`/films/${id}`);
    },
  },
};
</script>

<style>

</style>
