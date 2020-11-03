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