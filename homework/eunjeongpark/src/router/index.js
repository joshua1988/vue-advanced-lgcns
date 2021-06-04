import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
});