export default {
    state: {
        products: []
    },

    mutations: {
        createProduct(state, products) {
            state.products.push(products)
        },
        deleteProduct(state, id) {
            state.products.splice(id, 1)
        },
    },

    getters: {
        getProducts(state) {
            return state.products;
        }
    }
}