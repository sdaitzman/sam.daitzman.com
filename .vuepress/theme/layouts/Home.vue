<template>
  <div class="all-container">
    <div class="body-container">
      <div class="body-content">
        <Transition name="slide-up">
          <Content />
        </Transition>
      </div>
    </div>
    <Nav />
  </div>
</template>

<style lang="scss">
@import "../styles/base.scss";

.slide-up-enter-active, .slide-up-leave-active {
  transition: opacity 1.5s;
}

.slide-up-enter, .slide-up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style scoped lang="scss">
@import "../styles/variables.scss";

.body-content { padding-top: 150px; }

// https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
// stylelint-disable-next-line
.body-content::v-deep {
  h1 {
    font-size: 48px;
    margin: 0 20px 0 $left-pad;
    font-weight: 200;
  }

  p {
    font-size: 24px;
    font-weight: 200;
  }
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
