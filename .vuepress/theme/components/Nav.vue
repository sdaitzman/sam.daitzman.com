<template>
  <div class="nav">
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
  </div>
</template>

<style lang="scss">
@import '../styles/variables';

.nav-links {
  padding-left: $left-pad;

  li {
    display: inline-block;
    font-size: 24px;
    border-radius: 5px;
    margin-right: 20px;
    padding: 15px 7px;
    color: white;
    background: gray;

    &::after {
      display: inline-block;
      content: '+';
      width: 20px;
      height: 20px;
      color: black;
      position: absolute;
      z-index: -1;
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
