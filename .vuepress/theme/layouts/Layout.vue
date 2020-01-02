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

<style lang="stylus" scoped>
@require '../styles/variables'

.body-container
  background nice-red

</style>

<script>
import Nav from '@theme/components/Nav'
import 'normalize.css'
import '../styles/base.styl'

export default {
  components: {
    Nav
  }
}
</script>
