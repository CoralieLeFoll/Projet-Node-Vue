export default {
    state: {
        show: false,
        message: null,
        theme: "default",
        icon: "info"
    },

    mutations: {
        showSnackbar(state, message){
            state.theme = "default";
            state.message = message;
            state.show = true;
            state.icon = "info";
        },
        showErrorSnackbar(state, message){
            console.log('test')
            state.theme = "error-theme";
            state.message = message;
            state.show = true;
            state.icon = "error";
        },
        closeSnackbar(state){
            state.show = false;
        }
    },

    getters: {
        getMessage(state){
            return state.message;
        },
        getTheme(state){
            return state.theme;
        },
        getIcon(state){
            return state.icon;
        },
        isDisplayed(state){
            return state.show;
        }
    }
}