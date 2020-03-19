import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Portfolio from './components/Portfolio';
import AOS from 'aos';
import '@/assets/vendor/aos/aos.css';
import Vuex from 'vuex'
import { store } from './store'
// Globally register your component
Vue.component('Portfolio', Portfolio);
Vue.config.productionTip = false
Vue.use(Vuex)
new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
  store
}).$mount('#app')
