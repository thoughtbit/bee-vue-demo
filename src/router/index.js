import Vue from 'vue';
import Router from 'vue-router';
import Hello from '~/components/Hello';
import HelloJSX from '~/components/HelloJSX';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/jsx',
      name: 'HelloJSX',
      component: HelloJSX
    }
  ]
});
