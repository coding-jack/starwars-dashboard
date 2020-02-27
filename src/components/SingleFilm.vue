<template>
  <div class="film">
    <h2>Name: {{ getFilm.title }} </h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Film',

  computed: {
    ...mapGetters([
      'getFilms',
    ]),
    getFilm() {
      return this.getFilms[this.$route.params.id];
    },
  },
};
</script>

<style>

</style>
