import Vue from 'vue'
import Vuex from 'vuex'

// MODULES
import authStore from '@/stores/modules/AuthStore.js'
import snackBarStore from '@/stores/modules/SnackBarStore.js'
import productStore from '@/stores/modules/ProductStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
    // strict: true,
    modules: {
        authStore: authStore,
        snackBarStore: snackBarStore,
        productStore: productStore
    },
});