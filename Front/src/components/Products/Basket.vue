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
    <h1 v-show="products == null || products.length < 1"> Il n'y a pas de produits </h1>
    <md-button class="md-raised md-accent" @click="deleteAllProducts"> Supprimer tout les produits </md-button>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
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
      }
    }
}
</script>