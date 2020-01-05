// Configuration for your app

module.exports = function (ctx) {
  return {
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
    ],
    framework: {
      // all: true, // --- includes everything; for dev only!
      cssAddons: true,
      components: [
        'QLayout',
        'QHeader',
        'QPageContainer',
        'QPage',
        'QAvatar',
        'QPageSticky',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QDrawer',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QInput',
        'QBadge',
        'QScrollArea',
        'QFab',
        'QFooter',
        'QFabAction',
        'QSeparator',
        'QAjaxBar',
        'QForm'
      ],
      directives: [
        'Ripple'
      ],
      // Quasar plugins
      plugins: [
        'Notify'
      ]
    },
    supportIE: false,
    build: {
      scopeHoisting: true,
      extendWebpack (cfg) {
      	return {
        	htmlVariables: { title: "Cashier Application" }
        }
      }
    },
    devServer: {
      https: true,
      public: '0.0.0.0',
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
        globPatterns: ['**/*.{js,css,html,png,woff,jpg}'],
        runtimeCaching: [
          {
            // Match any same-origin request that contains 'api'.
            urlPattern: /\.(?:png|jpg|jpeg|svg|css|js|html|woff)$/,
            // Apply a network-first strategy.
            handler: 'NetworkFirst',
            options: {
              // Fall back to the cache after 10 seconds.
                networkTimeoutSeconds: 5,
                // Use a custom cache name for this route.
                cacheName: 'cashier-app',
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
              }
          },
          {
            // To match cross-origin requests, use a RegExp that matches
            // the start of the origin:
            urlPattern: new RegExp('^https://googlesheets\.google\.com/'),
            handler: 'NetworkFirst',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ],
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
        ]
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
