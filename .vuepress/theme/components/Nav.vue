<template>
  <div>
      <ul class="nav-links">
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/blog/"><li>Blog</li></router-link>
        <router-link to="/portfolio/"><li>Portfolio</li></router-link>
        <router-link to="/resume/"><li>Resumé</li></router-link>
        <router-link to="/utilities/"><li>Utilities</li></router-link>
      </ul>
  </div>
</template>

<style scoped lang="scss">
.nav-links {
  display: flex;
}
.nav-links li {
  display: inline-block;
  margin-right: 20px;
}
</style>

<script>
export default {
    name: 'Nav',
    data() {
        return {}
    }
}
</script>