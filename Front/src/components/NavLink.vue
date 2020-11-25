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

      <md-app-content>
        <div class="body">
          <router-view />
        </div>
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

<style>
html {
  font-size: 100%;
}

.body {
  padding-bottom: 20%;
  position: relative;
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
  position: absolute;
  bottom: 0; 
  width: 100%;
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

.legal {
   margin: 0;
   position: absolute;
   left: 50%;
   top: 100%;
   transform: translate(-50%, -50%);
}

@media screen and (min-width: 40.375em) {
  .footer__nav > * {
    flex: 1;
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
