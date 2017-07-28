import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },

    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/contacts',
      name: 'contacts-page',
      component: require('@/components/Contacts')
    },
    {
      path: '/music',
      name: 'music-page',
      component: require('@/components/Music')
    },
    {
      path: '/clock',
      name: 'clock-page',
      component: require('@/components/Clock')
    }

  ]
});
