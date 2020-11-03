<template>
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>
        <md-card-content>
<div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="username">Username</label>
                <md-input name="username" id="username" autocomplete="family-name" v-model="input.username" />
              </md-field>
            </div>
             <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="password">Password</label>
                <md-input name="password" id="last-name" autocomplete="family-name" v-model="input.password" type="password" />
              </md-field>
            </div>
</div>
        </md-card-content>

                <md-card-actions>
          <md-button type="button" class="md-primary" v-on:click="login()">Login</md-button>
        </md-card-actions>
      </md-card>
    
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
        login() {
          if(this.input.username !== "" && this.input.password !== "") {
            this.$store.commit("setInfos", {
              username: this.input.username,
              password: this.input.password,});
            localStorage.setItem("user", JSON.stringify({ ...this.$store.getters.getUserInfos }));
            this.$router.push("/");
          }
            else {
              this.$store.commit("showErrorSnackbar", "Veuilez remplir un user et un mdp")
            }
    }
  }
}
</script>

<style >
</style>