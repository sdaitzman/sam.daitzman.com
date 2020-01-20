
<template>
  <div>
    <div v-for="post in posts" :key="post.frontmatter.title">
      <router-link class="post-link" :to="post.path">
        <div class="blog-post">
          <h2 class="post-title">
            <router-link :to="post.path">
              {{ post.frontmatter.title }}
            </router-link>
          </h2>
          <p class="post-date">
            {{ formatDate(post.frontmatter.date) }}
          </p>
          <p>{{ post.frontmatter.description }}</p>

          <p>
            <router-link :to="post.path">
              Read more »
            </router-link>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../theme/styles/variables';

.post-title {
  margin: 0 $left-pad;
}

.blog-post {
  padding: 20px 0;
  margin: 20px $left-pad;
  box-sizing: border-box;

  &:hover {
    background: $light-gray;
    a { color: $nice-red; }
  }

  &:active {
    opacity: 0.3;
  }
}

.post-link {
  text-decoration: none;
  color: unset;
}

.post-date {
  color: $mid-gray;
  margin: 0 $left-pad;
  font-style: italic;
}
</style>

<script>
import moment from 'moment'

export default {
  computed: {
    posts () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index && !x.frontmatter.draft)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('MMM Do, YYYY')
    }
  }
}
</script>
