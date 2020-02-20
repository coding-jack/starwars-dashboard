<template>
  <div>
    <h1>People</h1>
    <p>Select a character below to view more info on them!</p>
    <h2 v-for="(person, index) in people" :key="index">{{ person.name }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'People',
  mounted() {
    this.$store.dispatch('loadPeople');
  },
  computed: {
    ...mapState([
      'people',
    ]),
  },
  methods: {
    ...mapActions([
      'loadPeople',
    ]),
  },
};
</script>

<style>

</style>
