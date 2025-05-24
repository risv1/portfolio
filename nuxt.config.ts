// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-24",
  devtools: { enabled: false },
  modules: ["@vueuse/nuxt", "@nuxt/icon", "@unocss/nuxt", "@nuxt/eslint"],
  ssr: false,
  css: ["./app/app.css"],
  srcDir: "app",
  serverDir: "server",
  unocss: {
    nuxtLayers: true,
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/images/logo-light.svg" },
      ]
    },
    pageTransition: { 
      name: 'page', 
      mode: 'out-in',
      duration: 300
    },
    layoutTransition: { 
      name: 'layout', 
      mode: 'out-in',
      duration: 300
    }
  }
});
