export default {
  mode: "static",
  ssr: false,
  server: {
    port: process.env.PORT || 3000,
    host: "0.0.0.0"
  },
  router: {
    base: "/",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Phanthakarn's Portfolio",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://unicons.iconscout.com/release/v4.0.0/css/line.css'},
      { rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'},
      {rel:'icon',href:'logo.png'}
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12' },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/color-mode',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
