<template>
  <div class="dashboard">
    <button v-for="(category, index) in categories" :key="index" @click="loadFilms()">{{ category }}</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Dashboard',
  mounted() {
    this.$store.dispatch('loadCategories');
    this.$store.dispatch('loadFilms');
  },
  computed: {
    ...mapState([
      'films',
      'categories',
    ]),
  },
  methods: {
    ...mapActions([
      'loadFilms',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
