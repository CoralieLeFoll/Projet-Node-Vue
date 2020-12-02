<template>
  <div>
    <div v-for="product in products" :key="product._id">
      <md-card >
        <md-card-header>
          <div class="md-title"> {{product.name}}</div>
        </md-card-header>

        <md-card-content>
          {{product.description}} <br>
          {{product.price}} € <br>
          <span class="md-primary"> quantité : {{product.quantity}} </span>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-fab md-primary" @click="addProduct(product._id)">
            <md-icon>add_shopping_cart</md-icon>
          </md-button>
          <md-button class="md-fab md-accent" @click="deleteProduct(product._id)">
            <md-icon>delete</md-icon>
          </md-button>
        </md-card-actions>
      </md-card>
    </div>

    <div v-show="products.length < 1">
      <h1> Le panier est vide. </h1>
      <a @click="$router.push('/products').catch(()=>{});" target="_blank" rel="noopener">Cliquer ici pour voir nos produits.</a>
    </div>

    <div v-show="products.length > 0" class="basket-right">
      <h2 class="md-nav"> Prix Total : {{totalPrice}} €</h2>
      <md-button class="md-primary" @click="validateBasket">Valider mon panier</md-button>
    </div>

    <md-button v-show="products.length > 0" class="md-raised md-accent" @click="deleteAllProducts"> Vider le panier </md-button>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .basket-right {
    position:absolute;
    margin-left: 60%;
    margin-top: -15%;
    border: 3px solid gray;
    padding : 2%;
    border-radius: 5%;
  }
</style>

<script>
export default {
    name: 'Basket',
    async mounted () {
      var customer = await this.$store.getters.getUserInfos
      await this.$store.dispatch('loadBasket', customer._id)
    },
    computed: {
      products() {
        return this.$store.getters.getBasket
      },
      totalPrice() {
        var totalPrice = 0
        this.products.forEach(p => {
          totalPrice += (p.price*p.quantity)
        });
        return totalPrice
      }
    },
    methods: {
      async addProduct (id) {
        var customer = await this.$store.getters.getUserInfos
        this.$store.dispatch('addProductToBasket', { customerId: customer._id, productId: id })
        this.$router.go()
      },
        async deleteProduct (id) {
          var customer = await this.$store.getters.getUserInfos
          this.$store.dispatch('deleteBasketProducts', { customerId: customer._id, productId: id })
          this.$router.go()
      },
        async deleteAllProducts () {
          var customer = await this.$store.getters.getUserInfos
          this.$store.dispatch('deleteBasket', customer._id)
      },
        async validateBasket() {
          var customer = await this.$store.getters.getUserInfos
          var order = {
            customerId: customer._id,
            products: this.products,
            totalPrice: this.totalPrice
          }
          this.$store.dispatch('createOrder', order)
          this.$store.dispatch('deleteBasket', customer._id)
          this.$store.commit("showErrorSnackbar", "Commande envoyée")
        }
    }
}
</script>