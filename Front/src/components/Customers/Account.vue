<template>
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Données personnelles</div>
        </md-card-header>
        <md-card-content>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="name">Prénom</label>
                        <md-input name="name" id="name" v-model="user.name" disabled />
                    </md-field>
                </div>
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="surname">Nom</label>
                        <md-input name="surname" id="surname" v-model="user.surname" disabled />
                    </md-field>
                </div>
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="birthdate">Date de naissance</label>
                        <md-input name="birthdate" id="birthdate" v-model="user.birthdate" disabled />
                    </md-field>
                </div>
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="mail">Mail</label>
                        <md-input name="mail" id="mail" v-model="user.mail" disabled />
                    </md-field>
                 </div>
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="password">Mot de passe</label>
                        <md-input name="password" id="password" v-model="user.password" type="password" placeholder="Mot de passe"/>
                    </md-field>
                </div>
</div>
        </md-card-content>

                <md-card-actions>
          <md-button type="button" class="md-primary" v-on:click="save()">Sauvegarder</md-button>
        </md-card-actions>
      </md-card>
    
</template>

<script>
export default {
  name: "Account",

  async mounted  () {
    this.user.password = ""
  },

  computed: {
    user() {
      return this.$store.getters.getUserInfos
    }
  },

  methods: {
        async save() {
          var message = null
          if(this.user.password !== "") {
            const modifiedUser = Object.assign({}, this.user);
            await this.$store.dispatch("modifyAccount", modifiedUser);
            var customer = this.$store.getters.getUserInfos
            if(this.$store.getters.isLogged) {
              localStorage.setItem("user", JSON.stringify({ ...customer }));
              message = "Données sauvegardées"
            }
            else {
              message = "Impossible de sauvegarder les données"
            }
          }
          else {
            message = "Données incorrectes"
          }
            if(message != null) {
              this.$store.commit("showErrorSnackbar", message)
            }
        this.user.password = ""
    }
  }
}
</script>

<style >
</style>