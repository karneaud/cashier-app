<template lang="html">
  <q-form class="q-pa-md">
    <div class="row items-start">
      <q-input
        square
        hint="URL or ID"
        class="full-width q-my-sm"
        filled
        clearable
        v-model="url"
        type="text"
        label="Sheet ID#/ URL"
      />
      <q-input
        square
        hint="Sheet Name"
        class="full-width q-my-sm"
        filled
        clearable
        v-model="title"
        type="text"
        label="Sheet Name"
      />
      <q-btn
        ref="loginBtn"
        :loading="loaded"
        :disable="disabled"
        unelevated
        color="light-green-7"
        size="lg"
        class="full-width"
        @click="setUserValues"
        :label="buttonText"
      />
    </div>
  </q-form>
</template>
<script>
import { OAuth2Client } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { mapActions, mapGetters } from "vuex";
const Exp = /^https:\/\/docs\.google\.com\/spreadsheets\/d\/(.+)\//,
  Client = new OAuth2Client({
    clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    redirectUri: window.location.href
  }),
  Doc = new GoogleSpreadsheet(),
  getSheet = async function(sheetId, title) {
    Doc.updateProperties({ sheetId });
    await Doc.useOAuth2Client(Client);
    await Doc.loadInfo();
    let sheet = Doc.sheetsByTitle(title);
    return await sheet.getRows();
  };

export default {
  name: "KForm",
  data() {
    return {
      title: "",
      sheet: this.getSheetId(),
      loading: false
    };
  },
  props: ["buttonText"],
  computed: {
    url: {
      set(s) {
        this.sheet = Exp.test(s) ? s.match(Exp)[1] : s;
      },
      get() {
        return this.sheet ? this.sheet : this.getSheetId();
      }
    },
    loaded() {
      return this.loading;
    },
    disabled() {
      return this.title == null && this.sheet == null;
    }
  },
  methods: {
    setUserValues() {
      if (this.title && this.sheet) {
        this.setSheetId(this.sheet);
        this.loading = true;
        getSheet(this.sheet, this.title)
          .catch(console.err)
          .then(rows => {
            console.log(rows);
            return this.$emit("saved");
          })
          .finally(() => (this.loading = false));
      }
    },
    ...mapGetters("user", ["getSheetId"]),
    ...mapActions("user", ["setSheetId"])
  }
};
</script>
