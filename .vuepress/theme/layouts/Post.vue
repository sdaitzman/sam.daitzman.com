<template>
  <div class="all-container">
    <Nav />
    <div class="body-container">
      <div class="body-content">
        <router-link to="/blog">
          <h3 class="return">
            « Back to Blog
          </h3>
        </router-link>
        <p class="post-date">
          {{ formatDate($page.frontmatter.date) }}
        </p>
        <Content />
      </div>
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

@import '../styles/prism';

pre[class*="language-"] {
  margin: $left-pad;
}

</style>

<style scoped lang="scss">
@import '../styles/variables';

.post-date {
  color: $mid-gray;
  margin: 0 $left-pad;
  font-style: italic;
}

.return {
  font-size: 20px;
}

// constrains iframes to not overflow on mobile
iframe { max-width: 90vw; }

</style>

<script>
import moment from 'moment'
import Nav from '@theme/components/Nav'
import 'normalize.css'
import 'typeface-source-sans-pro'
export default {
  components: {
    Nav
  },
  methods: {
    formatDate (date) {
      return moment(date).format('MMM Do, YYYY')
    }
  }
}
</script>
