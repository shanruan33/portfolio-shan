import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import SingleWork from './components/SingleWork.vue';
import Portfolio from './components/Portfolio';
import AOS from 'aos';
import '@/assets/vendor/aos/aos.css';

// Globally register your component
//Vue.component('SingleWork', SingleWork);
Vue.component('Portfolio', Portfolio);

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
