<template>
    <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Store</h1>
        
    <h2>Contact</h2>
    
    <address>
      lefollcoralie0@gmail.com<br>
      0646796648 <br>    
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
</template>

<style scoped>
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
  name: 'Footer',
};
</script>