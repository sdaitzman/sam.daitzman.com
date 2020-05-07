import quicklink from 'quicklink/dist/quicklink.umd.js'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, //  the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  window.document.addEventListener('touchstart', () => {}, false)
  quicklink.listen()
  // window.console.log('This runs in the final built app')
}
