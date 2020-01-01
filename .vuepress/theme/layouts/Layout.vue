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

<style lang="scss"> @import '../styles/base.scss'; </style>

<style lang="scss" scoped>

</style>

<script>
import Nav from '@theme/components/Nav'
import 'normalize.css'

export default {
  components: {
    Nav
  }
}
</script>
