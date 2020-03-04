require('dotenv').config()

export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  loading: {
    color: '#fff'
  },
  css: [],
  plugins: [],
  buildModules: [],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],
  bootstrapVue: {
    icons: true
  },
  auth: {
    redirects: {
      logout: "/login"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          logout: false,
          // user: false,
          user: {
            url: '/api/users/me',
            method: 'get',
            propertyName: false
            // propertyName: 'user'
          }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
  },
  router: {
    middleware: ['auth']
  },
  proxy: {
    '/api/': {
      // target: process.env.NODE_ENV === 'development' ? process.env.API_BASE_URL : 'https://api.majaqu.com',
      target: process.env.API_BASE_URL,
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  axios: {
    proxy: true,
    progress: true
    // baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:9000' : ''
  },
  build: {
    extend(config, ctx) {}
  }
}
