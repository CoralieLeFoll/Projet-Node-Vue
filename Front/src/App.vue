<template>
<div class="app">
      <NavLink :isLogged="$store.getters.isLogged" :isAdmin="$store.getters.isAdmin" />
      <SnackBar></SnackBar>            
      <Footer />
</div>
</template>

<script>
// COMPONENTS
import NavLink from "./components/NavLink.vue";
import SnackBar from "./components/SnackBar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    NavLink,
    SnackBar,
    Footer
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
@import "//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
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

.md-accent {
    color: #ff5252;
}

.md-primary {
    color: #448aff;
}

.md-nav {
    color: rgb(0 37 84);
}

a, a:visited, a:hover, a:active {
  color: inherit;
}
</style>
