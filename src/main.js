import Vue from 'vue'
import App from './App.vue'
import VueTreeNavigation from 'vue-tree-navigation'
import router from './router'
Vue.config.productionTip = false

Vue.use(VueTreeNavigation);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
