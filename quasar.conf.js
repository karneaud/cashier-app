// Configuration for your app

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'axios',
      'mixins',
      'components'
    ],

    css: [
      'app.styl'
    ],

    extras: [
      'roboto-font',
      'material-icons' // optional, you are not bound to it
      // 'ionicons-v4',
      // 'mdi-v3',
      // 'fontawesome-v5',
      // 'eva-icons'
    ],
    framework: {
      // all: true, // --- includes everything; for dev only!
      cssAddons: true,
      components: [
        'QLayout',
        'QHeader',
        'QPageContainer',
        'QPage',
        'QPageSticky',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QAvatar',
        'QInput',
        'QBadge',
        'QScrollArea',
        'QFab',
        'QFabAction',
        'QSeparator',
        'QAjaxBar'
      ],

      directives: [
        'Ripple'
      ],

      // Quasar plugins
      plugins: [
        'Notify'
      ]

      // iconSet: 'ionicons-v4'
      // lang: 'de' // Quasar language
    },
    supportIE: false,

    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
      	return {
        	htmlVariables: { title: "Cashier Application" }
        }
      }
    },

    devServer: {
      https: true,
      // port: 8080,
      // public: '0.0.0.0',
      open: false // opens browser window automatically
    },

    // animations: 'all' --- includes all animations
    animations: ['slideInUp', 'slideOutDown', 'zoomIn', 'zoomOut'],

    ssr: {
      pwa: false
    },

    pwa: {
      //workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        include: [/\.html$/,/\.js$/,/\.png$/,/\.woff$/,/\.json$/],
        runtimeCaching: [{
          // Match any same-origin request that contains 'api'.
          urlPattern: /js/,
          // Apply a network-first strategy.
          handler: 'NetworkFirst',
          options: {
            // Fall back to the cache after 10 seconds.
            networkTimeoutSeconds: 10,
            // Use a custom cache name for this route.
            cacheName: 'cashier-app-js',
            // Configure custom cache expiration.
            expiration: {
              maxEntries: 5,
              maxAgeSeconds: 60,
            },
            // Configure background sync.
            backgroundSync: {
              name: 'cashier-queue-js',
              options: {
                maxRetentionTime: 60 * 60,
              },
            },
            // Configure which responses are considered cacheable.
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
        },{
          // Match any same-origin request that contains 'api'.
          urlPattern: /css/,
          // Apply a network-first strategy.
          handler: 'NetworkFirst',
          options: {
            // Fall back to the cache after 10 seconds.
            networkTimeoutSeconds: 10,
            // Use a custom cache name for this route.
            cacheName: 'cashier-app-css',
            // Configure custom cache expiration.
            expiration: {
              maxEntries: 5,
              maxAgeSeconds: 60,
            },
            // Configure background sync.
            backgroundSync: {
              name: 'cashier-queue-css',
              options: {
                maxRetentionTime: 60 * 60,
              },
            },
            // Configure which responses are considered cacheable.
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
          },
          {
          // To match cross-origin requests, use a RegExp that matches
          // the start of the origin:
          urlPattern: new RegExp('^https://script\.googleusercontent\.com/'),
          handler: 'StaleWhileRevalidate',
          options: {
            
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      },
      manifest: {
        name: 'Cashier App',
        short_name: 'Mobile Cashier Application',
        description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'landscape',
        background_color: '#ffffff',
        theme_color: '#027be3',
        start_url: '/',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ],
        start_url: '/'
      },
      metaVariables: {
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        msapplicationTileColor: '#ffffff'
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app'
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
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
  }
}
