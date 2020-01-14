<template>
  <div class="nav">
    <router-link to="/">
      <h1 class="site-title">
        Sam Daitzman
      </h1>
    </router-link>
    <ul class="nav-links">
      <li>
        <router-link class="blog" to="/blog/">
          <h2>
            Blog
          </h2>
        </router-link>
      </li>
      <li>
        <router-link class="portfolio" to="/portfolio/">
          <h2>
            Portfolio
          </h2>
        </router-link>
      </li>
      <li>
        <router-link class="resume" to="/resume/">
          <h2>
            Resumé
          </h2>
        </router-link>
      </li>
      <li>
        <router-link class="utilities" to="/utilities/">
          <h2>
            Utilities
          </h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/variables';

.nav {
  display: flex;
  margin: 20px 20px 0;
  flex-direction: row;
  a { text-decoration: none; }
}

h2, .site-title { font-weight: 400; }

.site-title {
  font-size: 32px;
  padding: 20px;
  text-align: center;
  background: $nice-red;
  color: white;
  text-decoration: none;
}

.nav-links {
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 12px;
  align-items: center;
  flex: 1;

  li {
    display: inline-flex;
    height: 30px;

    a, h2 {
      color: $nicegray;
      position: relative;
      display: inline-flex;
      font-size: 28px;
      margin: 0;
      text-shadow: 2px 0 white, -2px 0 white, 0 0.2px white;
      transition: transform 0.2s ease, margin 0.2s ease, color 0.3s ease;

      &.router-link-active {
        $shift: 0.5px;
        transform: translateY(-3px);
        margin: 0 20px;
        h2 { font-weight: 700; }
      }

      &:active {
        color: rgba(black, 0.3);
        transition: none;
      }
    }
  }
}

// this is a comment!
</style>

<script>
export default {
  name: 'Nav',
  data () {
    return {}
  }
}
</script>
