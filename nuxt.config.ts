import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:['@/assets/css/main.css'],

  alias:{
    'assets': '<rootDir>/assets'
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@pinia/nuxt'],
})