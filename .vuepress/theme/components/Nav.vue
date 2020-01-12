<template>
  <div class="nav">
    <div class="site-title">
      sam daitzman
    </div>
    <ul class="nav-links">
      <li>
        <router-link class="home" to="/">
          home
        </router-link>
      </li>
      <li>
        <router-link class="blog" to="/blog/">
          blog
        </router-link>
      </li>
      <li>
        <router-link class="portfolio" to="/portfolio/">
          portfolio
        </router-link>
      </li>
      <li>
        <router-link class="resume" to="/resume/">
          resumé
        </router-link>
      </li>
      <li>
        <router-link class="utilities" to="/utilities/">
          utilities
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../styles/variables';

.nav {
  display: flex;
  height: 200px;
  margin: 7px 7px 0;
}

.site-title {
  text-decoration: unset;
  writing-mode: vertical-lr;
  font-size: 24px;
  border: 2px solid $nicegray;
  border-bottom: none;
  padding: 7px;
  text-align: center;
  background: $nice-red;
  color: white;
}

.nav-links {
  margin: 0;
  display: flex;
  list-style-type: none;
  padding-left: 0;

  a {
    display: inline-flex;
    font-size: 24px;
    margin-right: 20px;
    padding: 15px 7px;
    text-decoration: none;
    text-shadow: 2px 0 white, -2px 0 white, 0 0.2px white;
    &.router-link-exact-active { font-weight: 400; }

    &::after {
      content: '';
      border-bottom: 1px solid black;
      display: box;
      box-sizing: border-box;
      width: 100%;
      position: relative;
      top: -4px;
      z-index: -3;
    }
  }
}

.nav-links li:not(:last-child)::after {
  display: inline-block;
  content: '+';
  width: 20px;
  height: 20px;
  color: black;
  position: relative;
  right: 3px;
  pointer-events: none;
  user-select: none;
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
