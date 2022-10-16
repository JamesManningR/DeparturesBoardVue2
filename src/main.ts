import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import 'virtual:windi.css'
import './assets/scss/index.scss'

Vue.use(PiniaVuePlugin)

new Vue({
  pinia: createPinia(),
  render: h => h(App),
}).$mount('#app')
