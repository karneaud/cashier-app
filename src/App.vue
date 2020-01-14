<template>
  <div id="q-app">
    <router-view />
    <div class="not-standalone fullscreen fixed-center full-height bg-white fit full-width" v-if="!landscape || !standalone">
      <section v-show="!landscape">
        <article class="container width-75 fixed-center q-mx-auto bg-white">
          <p class="mx-auto q-ma-none text-center">  <q-icon name="stay_current_landscape" size="128px"/></p>
          <p class="text-subtitle1 q-my-sm text-center">This app is best experienced on a Landscape Tablet Device</p>
        </article>
      </section>
      <section v-show="!standalone" class="bg-white">
        <article class="container width-75 fixed-center bg-white q-mx-auto">
          <h5 class="text-h5 q-my-sm text-center">Add to Home Screen</h5>
          <div class="row q-gutter-md" v-if="device == 'ios'"><div class="col-2"><figure class="text-right q-ma-none"><img src="statics/ios-share-icon.png" style="height: 64px;"></figure></div><div class="col-8"><div class="container text-left"><h6 class="text-h6 q-my-xs">For iOS</h6><p>Tap the share icon on your browser and select the <strong>"Add to Home Screen"</strong> icon.</p></div></div></div>
          <div class="row q-gutter-md" v-if="device == 'android'">
            <div class="col-2">
              <figure class="text-right q-ma-none">
                <img src="statics/options-icon.png" class="q-mt-md" style="height: 46px"/>
              </figure>
            </div>
            <div class="col-8">
              <div class="container text-left">
                <h6 class="text-h6 q-my-xs">For Android</h6>
                <p>If you did not recieve a notification. Tap the options icon on your browser and select the <strong>"Add to Home Screen"</strong> option</p>
              </div>
            </div>
          </div>
        </article>
      </section>

    </div>
  </div>
</template>
<script>
  function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
  }

  export default {
    name: 'App',
    data() {
      return {
        standalone: false,
        device: null,
        landscape: false
      }
    },
    created() {
      let agent = navigator.userAgent || navigator.vendor || window.opera
      this.standalone = isRunningStandalone()
      this.device = (/android/i).test(agent) ?  'android' : ((/ipad/).test(agent)? 'ios' : null )
      this.landscape = (this.standalone && (window.innerWidth > window.innerHeight) && (window.innerWidth > 600))
    }
  }
</script>
<style>
</style>
