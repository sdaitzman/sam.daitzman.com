<template>
  <div class="all-container" :class="$page.title.toLowerCase()">
    <Nav />

    <div class="body-container">
      <div class="body-content">
        <Content />
      </div>
    </div>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    <script>
      if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
      if (!user) {
      window.netlifyIdentity.on("login", () => {
      document.location.href = "/admin/";
      });
      }
      });
      }
    </script>
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
