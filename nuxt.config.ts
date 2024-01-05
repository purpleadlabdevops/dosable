import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel:"apple-touch-icon", sizes:"180x180", href:"/img/apple-touch-icon.png" },
        { rel:"icon", type:"image/png", sizes:"32x32", href:"/img/favicon-32x32.png" },
        { rel:"icon", type:"image/png", sizes:"16x16", href:"/img/favicon-16x16.png" },
        { rel:"manifest", href:"/img/site.webmanifest"}
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0',
      meta: [
        { name: 'description', content: 'My amazing Dosable site.' }
      ],
      script: [
        // { src: '/js/promt.js' },
        { src: '/js/height.js', defer: true }
      ],
    },
  },
  plugins: ['~/plugins/maska', '~/plugins/chartjs'],
  modules: ['@pinia/nuxt', 'nuxt3-meta-pixel', '@zadigetvoltaire/nuxt-gtm'],
  facebook: {
    track: 'PageView',
    pixelId: '877878587355320',
    autoPageView: true,
    disabled: false,
    debug: false
  },
  gtm: {
    id: 'GTM-PBM4GRJX',
    defer: false,
    compatibility: false,
    enabled: true,
    debug: false,
    loadScript: true,
    enableRouterSync: true,
    trackOnNextTick: false,
    devtools: false
  },
  css: ["~/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/base/_functions.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    stripe_sk: process.env.STRIPE_SECRET_KEY_TEST,
    K_IPAD: process.env.K_IPAD,
    K_USER: process.env.K_USER,
    K_PASS: process.env.K_PASS,
    mdp: process.env.MD5_PREFIX,
    mysql: {
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      prefix: process.env.DB_PREFIX,
    },
    crypto: {
      algorithm: process.env.crypto_algorithm,
      secretKey: process.env.crypto_secretKey,
    },
    public: {
      stripe_pk: process.env.STRIPE_PUBLIC_KEY_TEST,
    },
  },
  nitro: {
    compressPublicAssets: true,
    preset: "node-server",
  },
  // typescript: {
  //   typeCheck: true
  // },
  // devtools: {
  //   enabled: true
  // }
})