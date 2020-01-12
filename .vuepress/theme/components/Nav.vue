<template>
  <div class="nav">
    <router-link to="/">
      <div class="site-title">
        sam daitzman
      </div>
    </router-link>
    <ul class="nav-links">
      <li>
        <router-link class="blog" to="/blog/">
          Blog
        </router-link>
      </li>
      <li>
        <router-link class="portfolio" to="/portfolio/">
          Portfolio
        </router-link>
      </li>
      <li>
        <router-link class="resume" to="/resume/">
          Resumé
        </router-link>
      </li>
      <li>
        <router-link class="utilities" to="/utilities/">
          Utilities
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../styles/variables';

.nav {
  display: flex;
  margin: 20px 20px 0;
  flex-direction: row;
  a { text-decoration: none; }
}

.site-title {
  font-family: Stratos;
  text-decoration: unset;
  font-size: 32px;
  padding: 20px;
  text-align: center;
  background: $nice-red;
  color: white;
  text-decoration: none;
}

.nav-links {
  font-family: 'Stratos-Lights';
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

    a {
      color: $nicegray;
      position: relative;
      display: inline-flex;
      font-size: 28px;
      margin: 0 6px;
      text-shadow: 2px 0 white, -2px 0 white, 0 0.2px white;
      transition: transform 0.2s ease, margin 0.2s ease, color 0.3s ease;

      &.router-link-active {
        $shift: 0.5px;
        font-weight: 700;
        transform: translateY(-3px);
        margin: 0 20px;
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
