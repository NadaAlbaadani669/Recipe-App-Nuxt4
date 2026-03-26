import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:['@/assets/css/main.css'],

  alias:{
    'assets': '<rootDir>/assets',
    'types' : '<rootDir>/types',
    'stores' : '<rootDir>/stores',
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  image:{
    domains : ['https://dummyjson.com']
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  googleFonts:{
    families:{
      Montserrat: true,
      Newsreader : true,
      Manrope: true,
    }
  }
})
