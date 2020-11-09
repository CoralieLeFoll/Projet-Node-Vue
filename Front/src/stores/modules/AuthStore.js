import axios from 'axios'

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
            await axios.post('http://localhost:3000/customers/login', customer)
                .then(function (response) {
                    commit('setInfos', response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        async signin({ commit }, customer) {
            await axios.post('http://localhost:3000/customers', customer)
                .then(function (response) {
                    commit('setInfos', response.data);
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

        getUsername(state) {
            return state.infos.username;
        },

        getUserInfos(state) {
            return state.infos;
        }
    }
}