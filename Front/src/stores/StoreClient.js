import Vue from 'vue'
import Vuex from 'vuex'

// MODULES
import authStore from '@/stores/modules/AuthStore.js'
import snackBarStore from '@/stores/modules/SnackBarStore.js'
import productStore from '@/stores/modules/ProductStore.js'
import basketStore from '@/stores/modules/BasketStore.js'
import orderStore from '@/stores/modules/OrderStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
    // strict: true,
    modules: {
        authStore: authStore,
        snackBarStore: snackBarStore,
        productStore: productStore,
        basketStore: basketStore,
        orderStore: orderStore
    },
});