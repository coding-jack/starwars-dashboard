<template>
  <div class="film">
    <h2>Name: {{ getFilm.title }} </h2>
    <h4>Episode: {{ getFilm.episode_id }}</h4>
    <h4>Released on: {{ getFilm.release_date }}</h4>
    <h4>{{ getFilm.opening_crawl }}</h4>
    <h4>Characters:</h4>
    <ul>
      <li v-for="(character, index) in getFilm.characters" :key="index">
        <router-link :to="`/people/${ getPersonId(character) }`">{{ getPeople[getPersonId(character)].name }}</router-link>
      </li>
    </ul>
    <h4>Planets:</h4>
    <ul>
      <li v-for="(planet, index) in getFilm.planets" :key="index">
        <router-link :to="`/planets/${ getPlanetId(planet) }`">{{ getPlanets[getPlanetId(planet)].name }}</router-link>
      </li>
    </ul>
    <h4>Species:</h4>
    <ul>
      <li v-for="(singleSpecies, index) in getFilm.species" :key="index">
        <router-link :to="`/species/${ getSpeciesId(singleSpecies) }`">{{ getSpecies[getSpeciesId(singleSpecies)].name }}</router-link>
      </li>
    </ul>
    <h4>Starships:</h4>
    <ul>
      <li v-for="(starship, index) in getFilm.starships" :key="index">
        <router-link :to="`/starships/${ getStarshipId(starship) }`">{{ getStarships[getStarshipId(starship)].name }}</router-link>
      </li>
    </ul>
    <h4>Vehicles:</h4>
    <ul>
      <li v-for="(vehicle, index) in getFilm.vehicles" :key="index">
        <router-link :to="`/vehicles/${ getVehicleId(vehicle) }`">{{ getVehicles[getVehicleId(vehicle)].name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Film',

  computed: {
    ...mapGetters([
      'getFilms',
      'getPeople',
      'getPlanets',
      'getSpecies',
      'getStarships',
      'getVehicles',
    ]),
    getFilm() {
      return this.getFilms[this.$route.params.id];
    },
  },

  methods: {
    getPersonId(personUrl) {
      const personId = personUrl.match(/\/people\/(\d+)\//);
      return personId[1];
    },
    getPlanetId(planetUrl) {
      const planetId = planetUrl.match(/\/planets\/(\d+)\//);
      return planetId[1];
    },
    getSpeciesId(speciesUrl) {
      const speciesId = speciesUrl.match(/\/species\/(\d+)\//);
      return speciesId[1];
    },
    getStarshipId(starshipUrl) {
      const starshipId = starshipUrl.match(/\/starships\/(\d+)\//);
      return starshipId[1];
    },
    getVehicleId(vehicleUrl) {
      const vehicleId = vehicleUrl.match(/\/vehicles\/(\d+)\//);
      return vehicleId[1];
    },
  },
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
}
</style>
