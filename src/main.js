import Vue from 'vue'
import App from './App.vue'
import Countries from './components/Countries'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter);

const routes = [
  {path: './', component: App},
  {path: './countries', component: Countries},
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
