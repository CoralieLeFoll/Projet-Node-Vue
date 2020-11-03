import Vue from 'vue'
import VueMaterial from 'vue-material'

import App from '@/App.vue'

import router from './router'

import store from './stores/StoreClient.js'

import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

export let vueInst = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

export default {vueInst, router}
