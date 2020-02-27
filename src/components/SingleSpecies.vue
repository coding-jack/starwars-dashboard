<template>
  <div class="species-single">
    <h1>Name: {{ getSingleSpecies.name }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SingleSpecies',

  computed: {
    ...mapGetters([
      'getSpecies',
    ]),
    getSingleSpecies() {
      return this.getSpecies[this.$route.params.id];
    },
  },
};
</script>

<style>

</style>
