<template>
  <div class="all-container" :class="$page.title.toLowerCase()">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" />
    <script src="https://www.unpkg.com/jquery@3.6.0/dist/jquery.min.js" />
    <script src="https://unpkg.com/medium-zoom@1.0.6/dist/medium-zoom.min.js" />

    <div class="body-container">
      <div class="creatures-body-content">
        <Content />
      </div>
    </div>
    <script>
      $(document).ready(function() {
      mediumZoom('img')
      })
    </script>
  </div>
</template>

<style lang="scss">
@import '../styles/base.scss';
@import '../styles/creatures.scss';

</style>

<style scoped lang="scss">
// @import '../styles/variables';
</style>

<script>
// import Nav from '@theme/components/Nav'
import 'normalize.css'
import 'fontsource-libre-baskerville'
import mediumZoom from 'medium-zoom'

export default {
  components: {
    // Nav
  },
  mounted () {
    mediumZoom('img')
  },
  updated () {
    var msnry = new Masonry('.grid', {
      itemSelector: '.grid-img',
      columnWidth: 200,
      fitWidth: true
    })
    mediumZoom('img')
  }
}
</script>
