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
        { src: '/js/gtm.js', async: true },
        { src: '/js/height.js', defer: true }
      ],
    },
  },
  plugins: ['~/plugins/maska'],
  modules: ['@pinia/nuxt', 'nuxt3-meta-pixel'],
  facebook: {
    track: 'PageView',
    pixelId: '877878587355320',
    autoPageView: true,
    disabled: false,
    debug: false
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
    public: {
      stripe_pk: process.env.STRIPE_PUBLIC_KEY_TEST,
    },
  },
  nitro: {
    compressPublicAssets: true,
    preset: "node-server",
  }
})