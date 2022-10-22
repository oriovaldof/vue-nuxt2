export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtAula',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Minha Descrição' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  //Variaveis de ambiente publicas que podem ser visiveis no clientSide
  publicRuntimeConfig:{
    youtube_api_key: process.env.YOTUBE_API_KEY
  },
  //Variaveis de ambiente privadas que não podem ser visiveis no client Side
  privateRuntTimeConfig:{
    facebook_api_key:process.env.FACEBOOK_API_KEY
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    /**Modo objeto de utilizar o plugin */
    {
      src:'@/plugins/my-plugin',
    //  mode: 'client' //no mode pode reeber 'client' o plugin roda no client side ou 'server' para o plugin rodar somente no server side
    },
    '@/plugins/dayjs', //declarando de modo global vai rodar tanto no 'server' qto no 'client'
    '@/plugins/vtooltip',
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
