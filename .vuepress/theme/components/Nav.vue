<template>
  <ul class="nav-links">
    <router-link to="/">
      <li>Home</li>
    </router-link>
    <router-link to="/blog/">
      <li>Blog</li>
    </router-link>
    <router-link to="/portfolio/">
      <li>Portfolio</li>
    </router-link>
    <router-link to="/resume/">
      <li>Resumé</li>
    </router-link>
    <router-link to="/utilities/">
      <li>Utilities</li>
    </router-link>
  </ul>
</template>

<style lang="scss">
@import '../styles/variables';

.nav-links, .nav-links:visited {
  display: flex;
  padding-left: 0;
}

.nav-links li {
  display: inline-block;
  margin-right: 20px;
  color: $nice-red;
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
