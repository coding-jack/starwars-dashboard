<template>
  <div class="dashboard">
    <!-- <p v-for="(post, index) in posts" :key="index">{{ post.title }}</p> -->
    <p v-for="(film, index) in films" :key="index">{{ film.title }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Dashboard',
  mounted() {
    this.$store.dispatch('loadPosts');
    this.$store.dispatch('loadFilms');
  },
  computed: {
    ...mapState([
      'posts',
      'films',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
