<template>
    <div class="page-container">
    <!-- <md-app md-waterfall md-mode="fixed"> -->
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title" :to="`/`">Application Vue JS</span>
			<md-button class="md-accent" :to="`/products`">Products</md-button>
          </div>

          <div class="md-toolbar-section-end">
            <md-button v-if="!isLogged" class="md-accent" :to="`/login`">Connexion</md-button>
            <md-button v-if="!isLogged" class="md-accent" :to="`/signin`">Inscription</md-button>
            <md-menu md-align-trigger v-else>
              <md-button md-menu-trigger @click="logout"> 
                {{ $store.getters.getUsername }}
                Deconnexion
              </md-button>
            </md-menu>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-content>
          <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
.md-app {
   height: 100vh;
}
</style>

<script>
export default {
  name: 'NavLink',
  data: () => {
    return {
    }
  },

  props: {
    isLogged: Boolean,
  },

  methods: {
    logout() {
      this.$store.commit("clearInfos");
      localStorage.removeItem("user");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.md-app {
   height: 100vh;
}
</style>
