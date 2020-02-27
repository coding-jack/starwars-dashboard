import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/HomeDashboard';
import Films from '@/pages/PageFilms';
import People from '@/pages/PagePeople';
import Planets from '@/pages/PagePlanets';
import Species from '@/pages/PageSpecies';
import Starships from '@/pages/PageStarships';
import Vehicles from '@/pages/PageVehicles';
import SinglePerson from '../components/SinglePerson';
import SinglePlanet from '../components/SinglePlanet';
import SingleFilm from '../components/SingleFilm';
import SingleSpecies from '../components/SingleSpecies';
import SingleVehicle from '../components/SingleVehicle';
import SingleStarship from '../components/SingleStarship';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/films',
      name: 'Films',
      component: Films,
    },
    {
      path: '/films/:id',
      name: 'SingleFilm',
      component: SingleFilm,
    },
    {
      path: '/people',
      name: 'People',
      component: People,
    },
    {
      path: '/people/:id',
      name: 'SinglePerson',
      component: SinglePerson,
    },
    {
      path: '/planets',
      name: 'Planets',
      component: Planets,
    },
    {
      path: '/planets/:id',
      name: 'SinglePlanet',
      component: SinglePlanet,
    },
    {
      path: '/species',
      name: 'Species',
      component: Species,
    },
    {
      path: '/species/:id',
      name: 'SingleSpecies',
      component: SingleSpecies,
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships,
    },
    {
      path: '/starships/:id',
      name: 'SingleStarship',
      component: SingleStarship,
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles,
    },
    {
      path: '/vehicles/:id',
      name: 'SingleVehicle',
      component: SingleVehicle,
    },
  ],
  mode: 'history',
});
