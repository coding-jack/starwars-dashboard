<template>
  <div class="film">
    <h2>Name: {{ getFilm.title }} </h2>
    <h4>Episode: {{ getFilm.episode_id }}</h4>
    <h4>Released on: {{ getFilm.release_date }}</h4>
    <h4>{{ getFilm.opening_crawl }}</h4>
    <h4>Characters:</h4>
    <ul>
      <li v-for="(character, index) in getFilm.characters" :key="index">
        <p>{{ character }}</p>
      </li>
    </ul>
    <h4>Planets:</h4>
    <ul>
      <li v-for="(planet, index) in getFilm.planets" :key="index">
        <p>{{ planet }}</p>
      </li>
    </ul>
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

<style scoped>
li {
  list-style: none;
}
</style>
