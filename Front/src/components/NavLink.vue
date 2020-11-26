<template>
    <div class="page-container">
    <!-- <md-app md-waterfall md-mode="fixed"> -->
    <md-app>
      <md-app-toolbar class="md-nav">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-title" md-menu-trigger :to="`/`">
              <i class="material-icons">home</i>Store
            </md-button>
            <md-button md-menu-trigger :to="`/products`">
              <i class="material-icons">store</i>Produits
            </md-button>
          </div>

          <div class="md-toolbar-section-end">
            <md-button v-if="!isLogged" md-menu-trigger :to="`/login`">
              <i class="material-icons">login</i>Connexion</md-button>
            <md-button v-if="!isLogged" md-menu-trigger :to="`/signin`" >
              <i class="material-icons">perm_contact_calendar</i>Inscription</md-button>
            <md-menu md-align-trigger v-else>
              <md-button md-menu-trigger :to="`/account`"> 
                <i class="material-icons">person</i>Compte
              </md-button>
              <md-button md-menu-trigger :to="`/basket`"> 
                <i class="material-icons">shopping_basket</i>Panier
              </md-button>
              <md-button md-menu-trigger class="md-nav" @click="logout"> 
                <i class="material-icons">directions_run</i>Deconnexion
              </md-button>
            </md-menu>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content class="body">
        <router-view />
      </md-app-content>
    </md-app>
    </div>
</template>

<style>
html {
  font-size: 100%;
}

.body {
  position: relative;
  margin-bottom: 10vh;
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
