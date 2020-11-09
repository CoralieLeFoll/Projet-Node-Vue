<template>
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>
        <md-card-content>
<div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="mail">Mail</label>
                <md-input name="mail" id="mail" autocomplete="family-name" v-model="input.mail" />
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
        mail: "",
        password: "",
      },
    };
  },

  methods: {
        async login() {
          var error = null
          if(this.input.mail !== "" && this.input.password !== "") {
            await this.$store.dispatch("login", this.input);
            var customer = this.$store.getters.getUserInfos
            if(customer.length != 0) {
              localStorage.setItem("user", JSON.stringify({ ...customer }));
              this.$router.push("/");
            }
            else {
              error = "Mail / Mot de passe incorrects"
            }
          }
          else {
            error = "Veuilez remplir un mail et un mot de passe"
          }
            if(error != null) {
              this.$store.commit("showErrorSnackbar", error)
            }
    }
  }
}
</script>

<style >
</style>