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
                    <q-input filled v-model="address" type="text" suffix="@gmail.com" label="Enter Gmail">
                  </q-input>
                    <q-input square filled clearable v-model="url" type="text" label="Sheet ID#/ URL" />
                  </q-form>
                </q-card-section>
                <q-card-actions class="q-px-md">
                  <q-btn ref="loginBtn" :loading="loaded" :disable="disabled" unelevated color="light-green-7" size="lg" class="full-width" @click="setUserValues" label="Login" />
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
import drive from 'drive-db'
import { mapActions } from 'vuex'

let r = /^https:\/\/docs\.google\.com\/spreadsheets\/d\/(.+)\//

export default {
  name: 'Login',
  data () {
    return {
      username: null,
      sheet: null,
      loading: false
    }
  },
  computed: {
    address: {
      set(email) {
        this.username = `${ (/@/g).test(email)? email.substr(0, email.indexOf('@')) : email }@gmail.com`
      },
      get(){
        let uname = (this.username == null? '' : this.username)

        return uname.substr(0, uname.indexOf('@'))
      }
    },
    url: {
      set(s) {
        this.sheet = r.test(s)? s.match(r)[1] : s
      },
      get() {
        return this.sheet
      }
    },
    loaded () {
      return this.loading
    },
    disabled() {
      return (this.username == null && this.sheet == null) || (this.sheet == null)
    }
  },
  methods: {
    setUserValues() {
      if(this.username && this.sheet) {
        this.setUserEmail(this.username)
        this.setSheetId(this.sheet)
        this.loading = true
        drive({sheet: this.sheet, cache: 0}).catch((e) => console.log(e)).then(db => {
          return this.$router.push({ path: '/' })
        }).finally(() => this.loading = false)
      }
    },
    ...mapActions('user', ['setUserEmail', 'setSheetId'])
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>
