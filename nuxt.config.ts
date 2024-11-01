// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Ideal Softer",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
    },
  },
  modules: [
    // Add your modules here, like:
    "@nuxtjs/tailwindcss",
    // Other modules...
  ],
  css: ["~/assets/scss/style.scss"],
  // Other configurations...
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  buildModules: ['@nuxt/typescript-build'],
});
