import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import './plugins/element.js'

Vue.config.productionTip = false

Vue.prototype.$fetch = axios;
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
