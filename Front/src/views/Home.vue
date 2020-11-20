<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/store-icon.webp">
    <h1>Accueil</h1>
    <p>
      Ce projet a pour but de représenter le fonctionnement d'un commerce en ligne : 
      <a @click="$router.push('/about')" target="_blank" rel="noopener">Pour en savoir plus</a>.
    </p>
    <h3>Produits</h3>
    <ul>
      <li>Nous avons donc une liste de produits que le client peut ajouter à son panier.</li>
      <li>L'administateur peut ajouter, supprimer ou encore modifier ces derniers.</li>
    </ul>
    <h3>Panier</h3>
    <ul>
      <li>Chaque client a son panier qu'il peut modifier comme il le souhaite.</li>
    </ul>
    <h3>Comptes</h3>
    <ul>
      <li>Le client peut donc créer son compte et y avoir accès afin de consulter ou de modifier certaines informations comme le mot de passe par exemple.</li>
      <li>L'administateur a son compte et a accès à la liste de produits pour pouvoir y faire des changements.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
img {
  width: 30%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
