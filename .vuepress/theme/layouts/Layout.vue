<template>
  <div class="all-container">
    <Nav />
    <div class="body-container">
      <div class="body-content">
        <Content />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/base.scss';
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
