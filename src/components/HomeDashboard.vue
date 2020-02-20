<template>
  <div class="home">
    <router-link
      v-for="(category, index) in categories"
      :key="index"
      :to="category"
      tag="button"
    >
    {{ category.charAt(0).toUpperCase() + category.slice(1) }}
    </router-link>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('loadCategories');
  },
  computed: {
    ...mapState([
      'categories',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
