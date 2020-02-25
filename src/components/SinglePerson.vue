<template>
  <div class="person">
    <h1>Name: {{ getPerson.name }} </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Person',

  computed: {
    ...mapGetters([
      'getPeople',
    ]),
    getPerson() {
      return this.getPeople[this.$route.params.id];
    },
  },
};
</script>

<style>

</style>
