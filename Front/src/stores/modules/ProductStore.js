import axios from 'axios'

export default {
    state: {
        products: [],
        product: {}
    },

    mutations: {
        setProducts(state, products) {
            state.products = products
        },
        setProduct(state, product) {
            state.product = product
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
            await axios.post(`http://localhost:3000/products`, product)
            .then(function () {
                dispatch('loadProducts')
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        async getProduct({ commit }, id) {
            await axios.get(`http://localhost:3000/products/${id}`)
                .then(function (response) {
                    commit('setProduct', response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        async changeProduct({ dispatch }, { product, id } ) {
            await axios.put(`http://localhost:3000/products/${id}`, product)
            .then(function () {
                dispatch('loadProducts')
            })
            .catch(function (error) {
                console.log(error);
            })
        },
    },

    getters: {
        getProducts(state) {
            return state.products;
        },
        getProduct(state) {
            return state.product;
        }
    }
}