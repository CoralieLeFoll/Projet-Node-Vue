import axios from 'axios'

export default {
    state: {
        products: []
    },

    mutations: {
        setProducts(state, products) {
            state.products = products
        }
    },

    actions: {
        async loadProducts({ commit }) {
            await axios.get('http://localhost:3000/products')
                .then(function (response) {
                    commit('setProducts', response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        async deleteProduct({ dispatch }, id) {
            await axios.delete(`http://localhost:3000/products/${id}`)
            .then(function () {
                dispatch('loadProducts')
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        async deleteAllProducts({ dispatch }) {
            await axios.delete(`http://localhost:3000/products`)
            .then(function () {
                dispatch('loadProducts')
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        async createProduct({ dispatch }, product) {
            console.log(product)
            await axios.post(`http://localhost:3000/products`, product)
            .then(function () {
                dispatch('loadProducts')
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },

    getters: {
        getProducts(state) {
            return state.products;
        }
    }
}