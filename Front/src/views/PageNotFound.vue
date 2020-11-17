<template>
  <div class="NotFound">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <div class="display-3 mt-5">Page non trouvée</div>
            <div class="grey--text lighten-5">
              La page que vous essayer de charger n'est plus ou pas disponible.
            </div>
            <div class="paragraph-text mt-2">
              <br />
              <br />Veuillez réessayer ou contacter notre support.
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  .paragraph-text {
    font-size: 18px;
  }
</style>