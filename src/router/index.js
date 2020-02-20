import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/HomeDashboard';
import Films from '@/pages/PageFilms';
import People from '@/pages/PagePeople';
import Planets from '@/pages/PagePlanets';
import Species from '@/pages/PageSpecies';
import Starships from '@/pages/PageStarships';
import Vehicles from '@/pages/PageVehicles';


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
      path: '/people',
      name: 'People',
      component: People,
    },
    {
      path: '/planets',
      name: 'Planets',
      component: Planets,
    },
    {
      path: '/species',
      name: 'Species',
      component: Species,
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships,
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles,
    },
  ],
  mode: 'history',
});
