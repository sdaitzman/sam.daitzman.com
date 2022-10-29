module.exports = {
  title: '🌱 Sam Daitzman',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-57620806-1' // UA-00000000-0
      }
    ], [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times'
        }
      }
    ]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: true,
      permalinkSymbol: '#'
    },
    extendMarkdown: md => {
      md.use(require('@centerforopenscience/markdown-it-imsize'))
    }
    // lineNumbers: true
  },
  head: [
    ['link', { rel: 'me', href: 'https://mastodon.social/@sdaitzman' }]
  ]
}
