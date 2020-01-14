
<template>
  <div>
    <div v-for="post in posts" :key="post.frontmatter.title">
      <div class="project-tile">
        <h2>
          {{ post.frontmatter.title }}
        </h2>

        <p>{{ post.frontmatter.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../theme/styles/variables';

.project-tile {
  background: $light-gray;
  padding: 20px 0;
  margin: 20px $left-pad;
  box-sizing: border-box;
  width: 250px;
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
        .filter(x => x.path.startsWith('/portfolio/') && !x.frontmatter.portfolio_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
    }
  }
}
</script>
