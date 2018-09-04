module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '上元会计是一家专注会计培训的连锁教育培训课程品牌，是上元教育旗下品牌，开设会计金手指系列，会计职称提升系列，全优全能金会计系列，会计金算盘系列等会计课程。拥有国内一流的师资团队，旨在培养全国顶尖会计专业人才，并拥有自己的线上教育平台—上元在线。欢迎前来报名学习！400-998-7863' },
      {name: 'keywords', content:'会计培训,会计证培训,会计上岗证培训，会计培训班,会计职称培训,会计从业资格证培训，会计做账报税，会计实操，会计金手指系列，会计职称提升系列，全优全能金会计系列，会计金算盘系列'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: '//at.alicdn.com/t/font_822111_lvqkkbg4dxm.css' },
    ]
  },
  // css
  css:[
    '~assets/css/base.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // plugins
  plugins:[
     '~/plugins/elementUi'
  ],
  // modules
  modules:[
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor:['element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

