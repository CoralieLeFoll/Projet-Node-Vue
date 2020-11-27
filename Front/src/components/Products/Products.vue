<template>
  <div>
    <!-- 
TODO : côté administrateur à faire -->
    <CreateProduct/>
    <div v-for="product in products" :key="product._id">
      <Product v-if="change && product._id == changedProductId" :change="change" :changedProductId="changedProductId" @update="change = $event;"/>
      <md-card v-else-if="!change || product._id != changedProductId">
        <md-card-header>
          <div class="md-title"> {{product.name}} </div>
        </md-card-header>

        <md-card-content>
          {{product.description}} <br>
          {{product.price}} €
        </md-card-content>
<!-- 
TODO : côté administrateur à faire -->
        <!-- <md-card-actions>
          <md-button class="md-fab md-accent" @click="deleteProduct(product._id)">
            <md-icon>delete</md-icon>
          </md-button>
          <md-button class="md-fab md-primary" @click="changeProduct(product._id)">
            <md-icon>edit</md-icon>
          </md-button>
        </md-card-actions> -->

        <md-card-actions>
          <md-button class="md-fab md-primary" @click="addProduct(product._id)">
            <md-icon>add_shopping_cart</md-icon>
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
import CreateProduct from './CreateProduct.vue'
import Product from './Product.vue'
export default {
    name: 'Products',
    components: {
      CreateProduct,
      Product
    },
    async mounted () {
      await this.$store.dispatch('loadProducts')
    },
    data: function() {
        return {
            change: false,
            changedProductId: 0
        }
    },
    computed: {
      products() {
        return this.$store.getters.getProducts
      }
    },
    methods: {
        deleteProduct (id) {
          this.$store.dispatch('deleteProduct', id)
      },
        deleteAllProducts () {
          this.$store.dispatch('deleteAllProducts')
      },
      changeProduct (id) {
        this.changedProductId = id
        this.change = true
      },
      async addProduct (id) {
        var customer = await this.$store.getters.getUserInfos
        this.$store.dispatch('addProductToBasket', { customerId: customer._id, productId: id })
      }
    }
}
</script>