<template>
  <div class="all-container">
    <div class="body-container">
      <div class="body-content">
        <Content />
      </div>
    </div>
    <Nav />
  </div>
</template>

<style lang="scss">
@import "../styles/base.scss";
</style>

<style scoped lang="scss">
@import "../styles/variables.scss";

.body-content { padding-top: 150px; }

// https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
// stylelint-disable-next-line
.body-content::v-deep h1 {
  font-size: 48px;
  margin: 0 20px 0 $left-pad;
  font-weight: 100;
}
</style>

<script>
import Nav from '@theme/components/Nav'
import 'normalize.css'
import 'typeface-source-sans-pro'

export default {
  components: {
    Nav
  }
}
</script>
