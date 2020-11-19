import axios from 'axios'

export default {
    state: {
        products: [],
    },

    mutations: {
        setBasketProducts(state, products) {
            state.products = products
        }
    },

    actions: {
        async loadBasket({ commit }, id) {
            await axios.get(`http://localhost:3000/baskets/${id}`)
                .then(function (response) {
                    var products = []
                    if(response.data.productIds) {
                        response.data.productIds.forEach(async p => {
                            await axios.get(`http://localhost:3000/products/${p}`)
                                .then(function (response) {
                                    products.push(response.data)
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                        });
                    }
                commit('setBasketProducts', products);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        async deleteBasket({ dispatch }, id) {
            await axios.delete(`http://localhost:3000/baskets/${id}`)
                .then(function () {
                    dispatch('loadBasket')
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        async deleteBasketProducts({ dispatch }, ids) {
            await axios.post(`http://localhost:3000/baskets/delete`, ids)
                .then(function () {
                    dispatch('loadBasket')
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        async addProductToBasket({ dispatch }, ids) {
            await axios.post(`http://localhost:3000/baskets/add`, ids)
                .then(function () {
                    dispatch('loadBasket')
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    },

    getters: {
        getBasket(state) {
            return state.products;
        },
    }
}