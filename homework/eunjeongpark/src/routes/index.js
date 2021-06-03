import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
});