<template>
  <q-layout>
  <q-page-container>
    <q-page>
      <div class="q-pa-md no-scroll window-height">
        <div class="shadow-1 container rounded-borders fixed-center q-pa-sm width-75">
          <div class="row">
            <div class="col-4 q-mr-none">
              <div class="container full-height center-content" style="flex-direction:column">
                <q-avatar size="128px" class="q-ma-md">
                  <img src="https://place-hold.it/300x500" />
                </q-avatar>
                <small><a href="">Need Help?</a></small>
              </div>
            </div>
            <div class="col">
              <div class="container">
                <q-form class="q-pa-md">
                  <div class="row q-gutter-md items-start">
                    <q-input filled hint="without @gmail" class="full-width" v-model="address" type="text" suffix="@gmail.com" label="Enter Gmail"/>
                    <q-input square hint="URL e.g. https://docs.google.com/spreadsheets/d/.../edit" class="full-width" filled clearable v-model="url" type="text" label="Sheet ID#/ URL" />
                    <q-btn ref="loginBtn" :loading="loaded" :disable="disabled" unelevated color="light-green-7" size="lg" class="full-width" @click="setUserValues" label="Login" />
                  </div>
                  <div class="row">
                    <a href=""><small>See how you create your spreadsheet here</small></a>
                  </div>
                </q-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</q-layout>

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
.width-75 {
  max-width: 75%;
  width: 75%;
}

.center-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
