
<template>
  <div class="portfolio-container">
    <div v-for="post in posts" :key="post.frontmatter.title" class="project-tile">
      <h2>
        <a v-if="post.frontmatter.link" :href="post.frontmatter.link">{{ post.frontmatter.title }} »
        </a>
        <span v-else>{{ post.frontmatter.title }}</span>
      </h2>

      <!--eslint-disable-next-line vue/no-v-html-->
      <div v-if="post.frontmatter.iframe" v-html="post.frontmatter.iframe" />
      <img v-else-if="post.frontmatter.img" :src="getImgUrl(post.frontmatter.img)" alt="">

      <div v-if="post.frontmatter.tags" class="tags">
        {{ post.frontmatter.tags.join(', ') }}
      </div>

      <p>{{ post.frontmatter.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../theme/styles/variables';

.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
}

.project-tile {
  padding: 0;
  margin: 20px $left-pad;
  box-sizing: border-box;
  width: 300px;
  // height: 350px;
  h2, p { margin: 5px 0; }

  h2 {
    font-size: 20px;
    height: 30px;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
  }
}

.post-link {
  text-decoration: none;
  color: unset;
}

.tags {
  color: $mid-gray;
  font-family: $sans;
  font-size: 12px;
  text-transform: uppercase;
}

img {
  width: 300px;
  height: auto;
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
  },
  methods: {
    getImgUrl (pic) {
      if (pic.startsWith('/uploads/')) return pic
      return require('../../portfolio/img/' + pic)
    }
  }
}
</script>
