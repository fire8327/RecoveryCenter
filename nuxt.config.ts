// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],

  postcss: {
    plugins: {
      cssnano: false 
    }
  },

  supabase: {
    redirect: false
  }
})