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

<style scoped lang="stylus">
@require '../styles/variables';

</style>

<script>
import Nav from '@theme/components/Nav'
import 'normalize.css'
import '../styles/base'

export default {
  components: {
    Nav
  }
}
</script>
