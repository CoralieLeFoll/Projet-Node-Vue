<template>
  <md-snackbar
    :md-position="position"
    :md-duration="duration"
    :md-active.sync="$store.state.snackBarStore.show"
    :md-theme="$store.getters.getTheme"
    md-persistent
  >
    <span>
      {{ $store.getters.getMessage }}
    </span>
    <md-button class="md-accent" @click="close">
      Close
    </md-button>
  </md-snackbar>
</template>

<script>
export default {
  name: "SnackBar",

  data() {
    return {
      position: "left",
      duration: 4000,
      infinity: false,
    };
  },

  methods: {
    close() {
      this.$store.commit("closeSnackbar");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>