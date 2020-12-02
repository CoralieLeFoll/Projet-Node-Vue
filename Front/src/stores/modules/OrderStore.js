import axios from 'axios'

export default {
    state: {
        orders: [],
    },

    mutations: {
        setOrders(state, orders) {
            state.orders = orders
        }
    },

    actions: {
        async createOrder({ dispatch }, order) {
            await axios.post(`http://localhost:3000/orders`, order)
                .then(function () {
                    dispatch('loadOrders')
                })
                .catch(function (error) {
                    console.log(error);
            })
        },
        async loadOrders({ commit }, id) {
            await axios.get(`http://localhost:3000/orders/${id}`)
                .then(function (response) {
                    if(response.data.length != 0) {
                        commit('setOrders', response.data);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        async deleteOrder({ dispatch }, id) {
            await axios.delete(`http://localhost:3000/orders/${id}`)
                .then(function () {
                    dispatch('loadOrders')
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },

    getters: {
        getOrders(state) {
            return state.orders;
        },
    }
}