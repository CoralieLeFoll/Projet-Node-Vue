<template>
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Inscription</div>
        </md-card-header>
        <md-card-content>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="name">Prénom</label>
                        <md-input name="name" id="name" v-model="input.name" />
                    </md-field>
                </div>
            </div>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="surname">Nom</label>
                        <md-input name="surname" id="surname" v-model="input.surname" />
                    </md-field>
                </div>
            </div>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="birthdate">Date de naissance</label>
                        <md-input name="birthdate" id="birthdate" v-model="input.birthdate" />
                    </md-field>
                </div>
            </div>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="mail">Mail</label>
                        <md-input name="mail" id="mail" v-model="input.mail" />
                    </md-field>
                 </div>
            </div>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="password">Password</label>
                        <md-input name="password" id="password" v-model="input.password" type="password" />
                    </md-field>
                </div>
            </div>
        </md-card-content>

                <md-card-actions>
          <md-button type="button" class="md-primary" v-on:click="signin()">Inscription</md-button>
        </md-card-actions>
      </md-card>
    
</template>

<script>
export default {
  name: "Signin",

  data() {
    return {
      input: {
        name: "",
        surname: "",
        birthdate: "",
        mail: "",
        password: ""
      },
    };
  },

  methods: {
        async signin() {
          var error = null
          if(this.input.mail !== "" && this.input.password !== "" && this.input.name !== "" && this.input.surname !== "" && this.input.birthdate !== "") {
            const user = Object.assign({}, this.input);
            await this.$store.dispatch("signin", user);
            var customer = this.$store.getters.getUserInfos
            if(this.$store.getters.isLogged) {
              await this.$store.dispatch("createBasket", customer._id)
              localStorage.setItem("user", JSON.stringify({ ...customer }));
              this.$router.push("/").catch(()=>{});
            }
            else {
              error = "Mail / Mot de passe incorrects"
            }
          }
          else {
            error = "Veuilez remplir un mail et un mot de passe"
            this.$emit('update', false);
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