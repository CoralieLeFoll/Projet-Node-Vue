import axios from 'axios'
import crypto from '../../services/crypto'

var cryptoJS = new crypto()

export default {
    state: {
        logged: false,
        infos: {}
    },

    mutations: {
        setInfos(state, infos) {
            state.infos = infos;
            state.logged = true;
        },
        clearInfos(state) {
            state.infos = {};
            state.logged = false;
        }
    },

    actions: {
        async login({ commit }, customer) {
            customer.password = await cryptoJS.aesEncrypt(customer.password)
            await axios.post('http://localhost:3000/customers/login', customer)
                .then(function (response) {
                    if(response.data.length != 0) {
                        commit('setInfos', response.data);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        async signin({ commit }, customer) {
            customer.password = await cryptoJS.aesEncrypt(customer.password)
            await axios.post('http://localhost:3000/customers', customer)
                .then(function (response) {
                    if(response.data.length != 0) {
                        commit('setInfos', response.data);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        async modifyAccount({ commit }, customer) {
            customer.password = await cryptoJS.aesEncrypt(customer.password)
            await axios.put(`http://localhost:3000/customers/${customer._id}`, customer)
                .then(function (response) {
                    if(response.data.length != 0) {
                        commit('setInfos', response.data);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    },

    getters: {
        isLogged(state) {
            return state.logged;
        },

        getUserInfos(state) {
            return state.infos;
        }
    }
}