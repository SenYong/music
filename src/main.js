import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/neat.css'
import './assets/css/style.css'

Vue.use(mint)
Vue.use(VueResource)



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
