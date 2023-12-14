import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0',
      meta: [
        { name: 'description', content: 'My amazing Fungaid site.' }
      ],
    },
  },
  plugins: ['~/plugins/maska', '~/plugins/windowWidth'],
  modules: ['@pinia/nuxt'],
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
    public: {
      stripe_pk: process.env.STRIPE_PUBLIC_KEY_TEST,
    },
  },
  nitro: {
    compressPublicAssets: true,
    preset: "node-server",
  },
  typescript: {
    typeCheck: true
  }
})