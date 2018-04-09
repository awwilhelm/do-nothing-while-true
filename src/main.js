// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueCookies from 'vue-cookies';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(vueCookies, VueAxios, axios, Router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
