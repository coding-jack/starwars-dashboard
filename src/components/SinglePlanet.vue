<template>
  <div class="planet">
    <h1>Name: {{ getPlanet.name }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Planet',

  computed: {
    ...mapGetters([
      'getPlanets',
    ]),
    getPlanet() {
      return this.getPlanets[this.$route.params.id];
    },
  },
};
</script>

<style>

</style>
