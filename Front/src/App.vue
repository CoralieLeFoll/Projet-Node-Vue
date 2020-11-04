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

export default {
  name: "App",
  components: {
    NavLink,
    SnackBar
  },
  created() {
    this.checkUserInfos();
  },

  methods: {
    checkUserInfos() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.$store.commit("setInfos", {...user});
      }
    }
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
