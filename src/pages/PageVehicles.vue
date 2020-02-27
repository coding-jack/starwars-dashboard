<template>
  <div>
    <h1>Vehicles</h1>
    <p>Select a Vehicle below and take an info ride!</p>
    <h2 v-for="(vehicle, index) in getVehicles" :key="index" @click="setCurrentVehicle(index)">{{ vehicle.name }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Vehicles',

  computed: {
    ...mapGetters([
      'getVehicles',
    ]),
  },
  methods: {
    setCurrentVehicle(id) {
      return this.$router.push(`/vehicles/${id}`);
    },
  },
};
</script>

<style>

</style>
