<template>
  <div class="vehicle">
    <h2>Name: {{ getVehicle.name }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Vehicle',

  computed: {
    ...mapGetters([
      'getVehicles',
    ]),
    getVehicle() {
      return this.getVehicles[this.$route.params.id];
    },
  },
};

</script>

<style>

</style>
