<template>
  <div class="all-container">
    <Nav />
    <div class="body-container">
      <transition name="fade">
        <Content />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/base.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style scoped lang="scss">
@import '../styles/variables'
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
