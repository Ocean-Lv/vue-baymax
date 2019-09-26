import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store/index'
import router from './router'

import './components/icons' // icon
// let store = require('@/store/index.js')
import './registerServiceWorker'


Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
