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
    }
    // lineNumbers: true
  }
}
