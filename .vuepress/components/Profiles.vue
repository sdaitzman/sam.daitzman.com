<template>
  <div class="profiles-container">
    <nav class="profiles">
      <ul>
        <li><a href="mailto:sam@daitzman.com"><font-awesome-icon :icon="['far', 'envelope']" />EMAIL</a></li>
        <li><a href="https://github.com/sdaitzman"><font-awesome-icon :icon="['fab', 'github']" />GITHUB</a></li>
        <li><a href="https://instagram.com/sdaitzman"><font-awesome-icon :icon="['fab', 'instagram']" />INSTAGRAM</a></li>
        <li><a href="https://twitter.com/sdaitzman"><font-awesome-icon :icon="['fab', 'twitter']" />TWITTER</a></li>
        <li><a href="https://www.linkedin.com/in/samdaitzman/"><font-awesome-icon :icon="['fab', 'linkedin']" />LINKEDIN</a></li>
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
import { library } from '@fortawesome/fontawesome-svg-core'

import { faEnvelope as fasEnvelop } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, fasEnvelop, faGithub, faInstagram, faTwitter, faLinkedin)

export default {
  name: 'Profiles',
  data () {
    return {}
  }
}
</script>
