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
        <md-button @click="deleteProduct(product.id)">Supprimer</md-button>
        <md-button>Détails</md-button>
      </md-card-actions>
    </md-card>
    <h1 v-show="products == null || products.length < 1"> Il n'y a pas de produits </h1>
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
    computed: {
        products: function() {
          return this.$store.getters.getProducts;
        },
    },
    methods: {
        deleteProduct (id) {
          let products = this.$store.getters.getProducts
          let position = 0
          products.forEach(p => {
            if(p.id == id) {
              this.$store.commit("deleteProduct", position);
            }
            position+=1
          });
          localStorage.setItem('products', JSON.stringify({...this.$store.getters.getProducts}))
      },
    }
}
</script>