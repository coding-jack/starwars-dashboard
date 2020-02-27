<template>
  <div class="starship">
    <h2>Name: {{ getVehicle.name }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Starship',

  computed: {
    ...mapGetters([
      'getStarships',
    ]),
    getVehicle() {
      return this.getStarships[this.$route.params.id];
    },
  },
};
</script>

<style>

</style>
