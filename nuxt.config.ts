// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  supabase: {
    url: "https://vjrptbgareuvxwwaxddd.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcnB0YmdhcmV1dnh3d2F4ZGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ2OTcsImV4cCI6MjAwOTY1MDY5N30.K6cOB3o0gF_hmsEFz7u-GCoJOs5NjjTx5RkaXKImFQ0",
    redirect: true,
    redirectOptions: {
      login: "/signin",
      callback: "/confirm",
      exclude: ["/signup"],
    },
  },
});
