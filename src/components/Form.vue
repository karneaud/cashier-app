<template lang="html">
  <q-form class="q-pa-md">
    <div class="row items-start">
      <q-input filled hint="without @gmail.com" class="full-width" v-model="address" type="text" suffix="@gmail.com" label="Enter Gmail"/>
      <q-input square hint="URL or ID" class="full-width q-my-sm" filled clearable v-model="url" type="text" label="Sheet ID#/ URL" />
      <q-btn ref="loginBtn" :loading="loaded" :disable="disabled" unelevated color="light-green-7" size="lg" class="full-width" @click="setUserValues" :label="buttonText" />
    </div>
    <div class="row">
      <a href=""><small>See how you create your spreadsheet here</small></a>
    </div>
  </q-form>
</template>
<script>
  import drive from 'drive-db'
  import { mapActions, mapGetters } from 'vuex'

  let r = /^https:\/\/docs\.google\.com\/spreadsheets\/d\/(.+)\//

  export default {
    name: 'KForm',
    data() {
      return {
        username: this.getUserEmail(),
        sheet: this.getSheetId(),
        loading: false
      }
    },
    props: ['buttonText'],
    computed: {
      address: {
        set(email) {
          this.username = `${ (/@/g).test(email)? email.substr(0, email.indexOf('@')) : email }`
        },
        get() {
          let uname = (this.username == null? this.getUserEmail() || '' : this.username)

          return (/@/g).test(uname)? uname.substr(0, uname.indexOf('@')) : uname
        }
      },
      url: {
        set(s) {
          this.sheet = r.test(s)? s.match(r)[1] : s
        },
        get() {
          return this.sheet? this.sheet : this.getSheetId()
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
            return this.$emit('saved')
          }).finally(() => this.loading = false)
        }
      },
      ...mapGetters('user', ['getUserEmail','getSheetId']),
      ...mapActions('user', ['setUserEmail', 'setSheetId'])
    }
  }
</script>
