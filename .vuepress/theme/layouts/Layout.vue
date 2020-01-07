<template>
  <div class="all-container" :class="{navAtBottom: $frontmatter.navAtBottom}">
    <Nav v-if="!$frontmatter.navAtBottom" />
    <div class="body-container">
      <div class="body-content">
        <transition name="fade">
          <Content />
        </transition>
      </div>
      <Nav v-if="$frontmatter.navAtBottom" />
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/base.scss';

$transition-time: 0.25s;

.fade-enter-active, .fade-leave-active {
  transition: opacity $transition-time ease, transform $transition-time ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>

<style scoped lang="scss">
@import '../styles/variables';
</style>

<style scoped lang="scss">
@import '../styles/variables';

.navAtBottom {
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
