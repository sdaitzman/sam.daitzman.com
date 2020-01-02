<template>
  <div class="nav">
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

.nav-links {
  padding-left: $left-pad;
  display: flex;
  list-style-type: none;

  a {
    display: inline-block;
    font-size: 24px;
    border-radius: 5px;
    margin-right: 20px;
    padding: 15px 7px;
    color: white;
    background: gray;
    text-decoration: none;
    &.router-link-exact-active { font-weight: 400; }

    &.home { background: #5ab165; }
    &.blog { background: #e55b4e; }
    &.resume { background: #133496; }
    &.portfolio { background: #4f1dc1; }
    &.utilities { background: #8a8a8a; }
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
