<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateProduct">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Ajouter un produit</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="name">Nom du produit</label>
                <md-input name="name" id="name" autocomplete="name" v-model="form.name" />
                <span class="md-error" v-if="!$v.form.name.required">Le nom est requis.</span>
                <span class="md-error" v-else-if="!$v.form.name.minlength">Nom invalide.</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('price')">
                <label for="price">Prix</label>
                <md-input name="price" id="price" autocomplete="price" v-model="form.price" />
                <span class="md-error" v-if="!$v.form.price.required">Le prix est requis.</span>
                <span class="md-error" v-else-if="!$v.form.price.minlength">Prix invalide.</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('description')">
                <label for="description">Description</label>
                <md-input name="description" id="description" autocomplete="description" v-model="form.description" />
                <span class="md-error" v-if="!$v.form.description.required">La description est requise.</span>
                <span class="md-error" v-else-if="!$v.form.description.minlength">Description invalide.</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Sauvegarder</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength,
  } from 'vuelidate/lib/validators'

  export default {
    name: 'CreateProduct',
    mixins: [validationMixin],
    data: () => ({
      form: {
        name: null,
        price: null,
        description: null,
      },
    }),
    validations: {
      form: {
        name: {
          required,
          minLength: minLength(3)
        },
        price: {
          required,
          minLength: minLength(1)
        },
        description: {
          required,
          minLength: minLength(10)
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.name = null
        this.form.price = null
        this.form.description = null
      },
      saveProduct () {
          this.$store.dispatch('createProduct', this.form)
      },
      validateProduct () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveProduct()
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>