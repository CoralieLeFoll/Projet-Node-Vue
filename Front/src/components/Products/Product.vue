<template>
  <div>
      <md-card class="md-layout-item">
        <md-card-header>
            <md-field>
                <label for="name">Name</label>
                <md-input name="name" id="changeName" autocomplete="name" v-model="product.name" />
            </md-field>
        </md-card-header>
        <md-card-content>
            <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="description">description</label>
                <md-input name="description" id="changeDescription" autocomplete="description" v-model="product.description" />
              </md-field>
            </div>
             <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="price">price</label>
                <md-input name="price" id="changePrice" autocomplete="price" v-model="product.price"/>
              </md-field>
            </div>
        </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="button" class="md-primary" v-on:click="modifier()">Modifier</md-button>
          <md-button type="button" class="md-primary" v-on:click="annuler()">Annuler</md-button>
        </md-card-actions>
      </md-card>
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
    name: 'Product',
    async mounted  () {
      await this.$store.dispatch('getProduct', this.changedProductId)
    },
    props: ['change', 'changedProductId'],
    computed: {
      product() {
        return this.$store.getters.getProduct
      }
    },
    methods: {
        modifier () {
          this.$store.dispatch('changeProduct', { 
            product: this.product, 
            id: this.changedProductId,
            })
            this.$emit('update', false);
        },
        annuler() {
          this.$emit('update', false);
        }
    }
}
</script>