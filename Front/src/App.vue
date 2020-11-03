<template>
<div class="app">
      <NavLink :isLogged="$store.getters.isLogged" />
      <SnackBar></SnackBar>
</div>
</template>

<script>
// COMPONENTS
import NavLink from "./components/NavLink.vue";
import SnackBar from "./components/SnackBar";
import Product from "./models/Product";
export default {
  name: "App",
  components: {
    NavLink,
    SnackBar
  },
  created() {
    this.checkUserInfos();
    this.getAllProducts();
  },

  methods: {
    checkUserInfos() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.$store.commit("setInfos", {...user});
      }
    },
    getAllProducts() {
      let products = JSON.parse(localStorage.getItem("products"));
      console.log(products)
      if (products != null) {
        for (let p in products) {
          let product = products[p]
          this.$store.commit("createProduct", new Product(product.id, product.name, product.price, product.description));
        }
      }
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
