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

<style lang="scss"> @import '../styles/base.scss'; </style>

<style scoped lang="scss">
    @import '../styles/variables.scss';

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
