import Vue from 'vue'
import App from './App.vue'
import router from './router'

// bootstap
import 'bootstrap/dist/css/bootstrap.min.css'
// css
import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
