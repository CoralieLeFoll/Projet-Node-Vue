<template>
    <div class="page-container">
    <!-- <md-app md-waterfall md-mode="fixed"> -->
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-title" :to="`/`">Store</md-button>
            <md-button class="md-accent" :to="`/products`">Produits</md-button>
          </div>

          <div class="md-toolbar-section-end">
            <md-button v-if="!isLogged" class="md-accent" :to="`/login`">Connexion</md-button>
            <md-button v-if="!isLogged" class="md-accent" :to="`/signin`">Inscription</md-button>
            <md-menu md-align-trigger v-else>
              <md-button md-menu-trigger @click="$router.push('/account')"> 
                Compte
              </md-button>
              <md-button md-menu-trigger @click="$router.push('/basket')"> 
                Panier
              </md-button>
              <md-button md-menu-trigger @click="logout"> 
                Deconnexion
              </md-button>
            </md-menu>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-content>
          <router-view />
<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Store</h1>
        
    <h2>Contact</h2>
    
    <address>
      lefollcoralie0@gmail.com<br>
      0646796648 <br>    
      <a class="footer__btn" href="lefollcoralie0@gmail.com">Contactez moi</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">A propos</h2>

      <ul class="nav__ul">
        <li>
          <a href="/">Accueil</a>
        </li>

        <li>
          <a href="/about">A propos</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Produits</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="/Products">Produits</a>
        </li>
        
        <li>
          <a href="/Basket">Panier</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Compte client</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="/Account">Compte</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2020 Store. All rights reserved.</p>
  </div>
</footer>
      </md-app-content>
    
    </md-app>
  </div>
</template>

<style scoped>
.md-app {
   height: 100vh;
}
*, *:before, *:after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  font-family: acumin-pro, system-ui, sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-size: 14px;
  background-color: #f4f4f4;
  align-items: start;
  min-height: 100vh;
}

.footer {
  display: flex;
  flex-flow: row wrap;
  padding-left: 20px;
  padding-right: 20px;
  color: #2f2f2f;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}

.footer > * {
  flex:  1 100%;
}

.footer__addr {
  margin-right: 1.25em;
}

.footer__logo {
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  text-transform: lowercase;
  font-size: 1.5rem;
}

.footer__addr h2 {
  margin-top: 1.3em;
  font-size: 15px;
  font-weight: 400;
}

.nav__title {
  font-weight: 400;
  font-size: 15px;
}

.footer address {
  font-style: normal;
  color: #999;
}

.footer__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgb(33, 33, 33, 0.07);
  border-radius: 100px;
  color: #2f2f2f;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 2em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
	flex-flow: row wrap;
}

.footer__nav > * {
  flex: 1 50%;
  margin-right: 1.25em;
}

.nav__ul a {
  color: #999;
}

.nav__ul--extra {
  column-count: 2;
  column-gap: 1.25em;
}

.legal {
  display: flex;
  flex-wrap: wrap;
}
  
.legal__links {
  display: flex;
  align-items: center;
}

.heart {
  color: #2f2f2f;
}

@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav > * {
    flex: 1;
  }
  
  .nav__item--extra {
    flex-grow: 2;
  }
  
  .footer__addr {
    flex: 1 0px;
  }
  
  .footer__nav {
    flex: 2 0px;
  }
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
