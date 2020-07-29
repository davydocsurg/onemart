import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'

// bootstap
import 'bootstrap/dist/css/bootstrap.min.css'
// css
import '@/assets/css/main.css'
// store {handles alert,}
import { store } from './_store';


Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
