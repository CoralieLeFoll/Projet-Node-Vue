<template>
  <div>
    <CreateProduct/>
    <md-card v-for="product in products" :key="product.id">
      <md-card-header>
        <div class="md-title"> {{product.name}} </div>
      </md-card-header>

      <md-card-content>
        {{product.description}}
      </md-card-content>

      <md-card-actions>
        <md-button @click="deleteProduct(product._id)">Supprimer</md-button>
        <md-button>Détails</md-button>
      </md-card-actions>
    </md-card>
    <h1 v-show="products == null || products.length < 1"> Il n'y a pas de produits </h1>
    <button @click="deleteAllProducts"> Supprimer tout les produits </button>
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
export default {
    name: 'Products',
    components: {
      CreateProduct,
    },
    async mounted () {
      await this.$store.dispatch('loadProducts')
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
    }
}
</script>