<template>
  <div class="q-pa-md no-scroll">
    <div class="row">
      <div class="col">
            <div class="row flex-center">
              <h5 class="text-h5 q-my-md text-center">Company & Co</h5>
            </div>
            <div class="row flex-center">
              <q-card square bordered class="q-pa-lg shadow-1">
                <q-card-section>
                  <q-form class="q-gutter-md">
                    <q-input filled v-model="email" type="email" suffix="@gmail.com" label="Enter Gmail">
                    <template v-slot:before>
                      <q-icon name="mail" />
                    </template>
                  </q-input>
                    <q-input square filled clearable v-model="sheetId" type="text" label="Sheet ID#" />
                  </q-form>
                </q-card-section>
                <q-card-actions class="q-px-md">
                  <q-btn unelevated color="light-green-7" size="lg" class="full-width" label="Login" />
                </q-card-actions>
                <q-card-section class="text-center q-pa-none">
                  <p class="text-grey-6">Not reigistered? Created an Account</p>
                </q-card-section>
              </q-card>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      email: {
        set(email) { state.user.email = email},
        get: () => state.user.email
      },
      sheetId: {
        set(id) { state.user.id =  id},
        get: () => state.user.id
      }
    })
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>
