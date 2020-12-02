<template>
<div>
    <div v-for="order in orders" :key="order._id">
    <h1> Commande n°{{order._id}} </h1>
    
    <div v-for="product in order.products" :key="product._id">
      <md-card>
        <md-card-header>
          <div class="md-title">{{product.name}}</div>
        </md-card-header>
        <md-card-content>
          {{product.description}} <br>
          Prix : {{product.price}} € <br>
          Quantité : {{product.quantity}}
        </md-card-content>
      </md-card>
    </div>
    <h1 v-show="orders.length < 1"> Vous n'avez pas pas de commandes </h1>
  </div>
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
    name: 'Orders',
    async mounted () {
      var customer = await this.$store.getters.getUserInfos
      await this.$store.dispatch('loadOrders', customer._id)
    },
    computed: {
      orders() {
        return this.$store.getters.getOrders
      }
    }
}
</script>