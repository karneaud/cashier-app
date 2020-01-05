<template>
  <div id="q-app">
    <router-view />
    <div class="not-standalone fullscreen fixed-center full-height bg-white fit full-width" v-show="!standalone">
      <section>
        <header class="text-center">
          <h3 class="text-h1">Welcome</h3>
        </header>
        <article class="container q-mx-auto">
          <div class="row justify-center">
            <div class="col-6 col-md-auto text-center">
              <div class="container">
                <p class="text-h4">To begin please add the app to your device's home screen.</p>
                <q-separator class="q-my-md"/>
                <div class="row items-center">
                  <div class="col-6">
                    <div class="container">
                      <div class="row q-gutter-md">
                        <div class="col-2">
                          <figure class="text-right q-ma-none">
                            <img src="statics/ios-share-icon.png" style="height:64px" />
                          </figure>
                        </div>
                        <div class="col-6">
                          <div class="container text-left">
                            <h6 class="text-h5 q-my-xs">For iOS</h6>
                            <p class="text-body1">Tap the share icon on your browser and select the <strong>"Add to Home Screen"</strong> icon.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="container">
                      <div class="row q-gutter-md">
                        <div class="col-2">
                          <figure class="text-right q-ma-none">
                            <img src="statics/options-icon.png" class="q-mt-md" style="height: 46px"/>
                          </figure>
                        </div>
                        <div class="col-6">
                          <div class="container text-left">
                            <h6 class="text-h5 q-my-xs">For Android</h6>
                            <p class="text-body1">If you did not recieve a notification. Tap the options icon on your browser and select the <strong>"Add to Home Screen"</strong> option</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row q-my-md">
                  <div class="col-12">
                    <div class="container">
                      <p class="text-body1">Once this is done. Close this browser and open the app using the icon on the Home Screen.</p>
                    </div>
                  </div>
                </div>
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
      }
    },
    created() {
      this.standalone = isRunningStandalone()
    }
  }
</script>
<style>
</style>
