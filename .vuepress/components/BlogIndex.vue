
<template>
  <div>
    <div v-for="post in posts" :key="post.frontmatter.title">
      <router-link class="post-link" :to="post.path">
        <div class="blog-post">
          <h2>
            <router-link :to="post.path">
              {{ post.frontmatter.title }}
            </router-link>
          </h2>

          <p>{{ post.frontmatter.description }}</p>

          <p>
            <router-link :to="post.path">
              Read more
            </router-link>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../theme/styles/variables';

.blog-post {
  background: $light-gray;
  padding: 20px 0;
  margin: 20px 0;
  box-sizing: border-box;
  &:hover { background: darken($light-gray, 5%); }
  &:active { background: darken($light-gray, 10%); }
}

.post-link {
  text-decoration: none;
  color: unset;
}
</style>

<script>
export default {
  computed: {
    posts () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
    }
  }
}
</script>
