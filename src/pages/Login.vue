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
                  <k-form @saved="(() => this.$router.push({ path: '/' }))" buttonText="Login"/>
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
  export default {
    name: 'Login'
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
