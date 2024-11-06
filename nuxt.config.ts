// https://nuxt.com/docs/api/configuration/nuxt-config

import { viteStaticCopy } from 'vite-plugin-static-copy';
export default defineNuxtConfig({
  app: {
    head: {
      title: 'PureUI Nuxt Template',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'description', content: 'PureUI Nuxt Template' }],
      style: [],
      script: [],
      noscript: [{ children: 'JavaScript is required' }],
      lang: 'vi',
    },
    keepalive: false, //Default values for KeepAlive configuration between pages. Default: false
    layoutTransition: { name: 'layout', mode: 'out-in' },
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: false,
    // pageTransition: false,
    rootId: '__nuxt',
    rootTag: 'div',
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['.vue'],
    },
  ],

  css: [
    'pure-uikit/dist/themes/light.css',
    'pure-uikit/dist/themes/dark.css',
    '~/assets/css/index.scss',
    'animate.css',
    'swiper/css',
  ],
  debug: false,

  devServer: {
    host: 'localhost',
    https: false,
    port: 1234,
  },

  devtools: {
    enabled: false,

    timeline: {
      enabled: false,
    },
  },

  dir: {
    assets: 'assets',
    layouts: 'layouts',
    middleware: 'middleware',
    modules: 'modules',
    pages: 'pages',
    plugins: 'plugin',
    public: 'public',
    static: 'static',
  },

  imports: {
    dirs: ['types/**'], //An array of custom directories that will be auto-imported.
    global: false,
  },

  logLevel: 'info',

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-swiper',
    '@nuxtjs/robots',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: true,
          Nunito: [200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
  ],

  swiper: {
    // Swiper options
    //----------------------
    prefix: 'Swiper',
    styleLang: 'css',
    modules: [
      'navigation',
      'pagination',
      'a11y',
      'autoplay',
      'effect-creative',
      'free-mode',
      'thumbs',
      'effect-fade',
    ], // all modules are imported by default
  },

  pages: true,

  plugins: [
    { src: '@/plugins/pureui.client.ts' },
    { src: '@/plugins/error.ts' },
    { src: '~/plugins/aos.client.ts', mode: 'client', ssr: false },
    { src: '@/plugins/environment.ts' },
  ],

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  rootDir: '.',

  // router: {
  //   options: {
  //     scrollBehaviorType: 'smooth', //Use  for hashMode  (SPA or ssr: false)
  //   },
  // },

  routeRules: {
    // Homepage pre-rendered at build time
    // '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    // '/product/**': { ssr: true, prerender: false },
    // '/collection/**': { ssr: false, prerender: false },
    // Blog post generated on-demand once until next deploy
    // '/blog/**': { isr: true, prerender: false },
    // Admin dashboard renders only on client-side
    // '/admin/**': { ssr: false, prerender: false },
    // '/builder': { cors: true, ssr: false, prerender: false },
    // '/oauth/**': { cors: true, ssr: false, prerender: false },
    // '/auth/**': { cors: true, ssr: false, prerender: false },
    // '/help-center': { cors: true, ssr: false, prerender: false },
    // '/contact': { cors: true, ssr: false, prerender: false },
    // '/shopping-cart': { cors: true, ssr: false, prerender: false },
    // '/checkout': { cors: true, ssr: false, prerender: false },
    // '/policy': { cors: true, ssr: false, prerender: false },
    // '/careers/**/apply': { cors: true, ssr: false, prerender: false },
  },

  runtimeConfig: {
    // Private keys are only available on the server
    // apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      apiHrmBase: process.env.NUXT_PUBLIC_HRM_API_BASE || '/api',
      tool: process.env.NUXT_PUBLIC_BUILDER_TOOL || '/app',
      stripeKey: process.env.NUXT_STRIPE_PUBLIC_KEY || '',
      smartyID: process.env.NUXT_SMARTY_AUTH_ID || '',
      smartyToken: process.env.NUXT_SMARTY_AUTH_TOKEN || '',
      smartyClientKey: process.env.NUXT_SMARTY_CLIENT_KEY || '',
      assetsCdn: process.env.NUXT_ASSETS_CDN || '',
    },
  },

  sourcemap: {
    server: false,
    client: false,
  },

  ssr: true,

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => String(tag).startsWith('p-'),
    },
    propsDestructure: true,
    runtimeCompiler: false,
  },

  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/pure-uikit/dist/assets',
            dest: 'public/',
          },
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
  },

  compatibilityDate: '2024-11-06',

  typescript: {
    // typeCheck: true,
    // strict: false
  },
});
