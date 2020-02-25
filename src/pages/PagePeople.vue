<template>
  <div>
    <h1>People</h1>
    <p>Select a character below to view more info on them!</p>
    <h2 v-for="(person, index) in getPeople" :key="index" @click="setCurrentPerson(index)">{{ person.name }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'People',
  computed: {
    ...mapGetters([
      'getPeople',
    ]),
  },
  methods: {
    setCurrentPerson(id) {
      return this.$router.push(`/people/${id}`);
    },
  },
};
</script>

<style>

</style>
