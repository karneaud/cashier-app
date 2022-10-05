// Configuration for your app
const ESLintPlugin = require("eslint-webpack-plugin"),
  nodePolyfillWebpackPlugin = require("node-polyfill-webpack-plugin");

module.exports = function(ctx) {
  return {
    boot: ["mixins", "components"],
    css: ["app.sass"],
    extras: [
      "roboto-font",
      "material-icons" // optional, you are not bound to it
    ],
    mode: { spa: true },
    modeName: "spa",
    dev: true,
    prod: false,
    debug: true,
    supportTS: false,
    framework: {
      // all: true, // --- includes everything; for dev only!
      cssAddons: true,
      components: [
        "QLayout",
        "QHeader",
        "QPageContainer",
        "QPage",
        "QAvatar",
        "QPageSticky",
        "QToolbar",
        "QToolbarTitle",
        "QBtn",
        "QIcon",
        "QDrawer",
        "QList",
        "QItem",
        "QItemSection",
        "QItemLabel",
        "QInput",
        "QBadge",
        "QScrollArea",
        "QFab",
        "QFooter",
        "QFabAction",
        "QSeparator",
        "QAjaxBar",
        "QForm"
      ],
      directives: ["Ripple"],
      // Quasar plugins
      plugins: ["Notify"]
    },
    build: {
      scopeHoisting: true,
      vueRouterMode: "hash",
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules|quasar)/
        });
      },
      chainWebpack(chain) {
        chain
          .mode("development")
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js", "vue"] }]);
        chain.plugin("node-polyfill").use(nodePolyfillWebpackPlugin);
      },
      vuePublicPath: "/public"
    },
    /*devServer: {
      static: {
        directory: '/public',
        publicPath: '/public',
      },
      https: true,
      allowedHosts: "auto",
      open: false // opens browser window automatically
    },*/
    // animations: 'all' --- includes all animations
    animations: ["slideInUp", "slideOutDown", "zoomIn", "zoomOut"],
    ssr: {
      pwa: false
    },
    debug: true,
    pwa: {
      workboxMode: "injectManifest",
      mode: "production",
      injectPwaMetaTags: true,
      swFilename: "sw.js",
      manifestFilename: "manifest.json",
      useCredentialsForManifestTag: false
    },
    sourceFiles: {
      pwaRegisterServiceWorker: "src-pwa/register-service-worker",
      pwaServiceWorker: "src-pwa/custom-service-worker",
      pwaManifestFile: "src-pwa/manifest.json"
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack(cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Window only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration
        // appId: 'quasar-app'
      }
    }
  };
};
