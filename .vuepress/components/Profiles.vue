<template>
  <div class="profiles-container">
    <nav class="profiles">
      <ul>
        <li><a href="mailto:sam@daitzman.com"><i class="far fa-envelope" /> EMAIL</a></li>
        <li><a href="https://github.com/sdaitzman"><i class="fab fa-github" /> GITHUB</a></li>
        <li><a href="https://instagram.com/sdaitzman"><i class="fab fa-instagram" /> INSTAGRAM</a></li>
        <li><a href="https://twitter.com/sdaitzman"><i class="fab fa-twitter" /> TWITTER</a></li>
        <li><a href="https://www.linkedin.com/in/samdaitzman/"><i class="fab fa-linkedin" /> LINKEDIN</a></li>
        <li><a href="https://ring.inkering.com/?from=https://sam.daitzman.com"><img src="/ring.png" alt=""> WEBRING </a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import '../theme/styles/variables';

.profiles ul {
  padding: 0;
  list-style: none;
  display: block;
  flex-direction: row;
  line-height: 50px;
  margin-left: $left-pad;
}

.profiles ul li {
  display: inline;

  img {
    width: 18px;
    height: 18px;
    position: relative;
    top: 3px;
  }
}

.profiles ul li a {
  white-space: nowrap;
  text-decoration: none;
  padding: 0 3px;
  font: 18px $sans;
  font-weight: 500;
  svg { margin-right: 3px; }
}
</style>

<script>
export default {
  name: 'Profiles',
  components: {
  },
  data () {
    return {}
  }
}
</script>
