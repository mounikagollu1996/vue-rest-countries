import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import SelectedCountry from './components/SelectedCountry.vue'
import Countries from './components/Countries.vue'

Vue.use(VueResource)
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Countries},
  {path: '/country/:countryId', name: '/country/countryId', component: SelectedCountry} 
];
const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
