<template>
  <div class="nav">
    <router-link to="/">
      <h1 class="site-title">
        Sam Daitzman
      </h1>
    </router-link>
    <ul class="nav-links">
      <li>
        <router-link class="blog" to="/blog/">
          <h2>
            Blog
          </h2>
        </router-link>
      </li>
      <li>
        <router-link class="portfolio" to="/portfolio/">
          <h2>
            Portfolio
          </h2>
        </router-link>
      </li>
      <li>
        <router-link class="now" to="/now/">
          <h2>
            Now
          </h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/variables';

.nav {
  display: flex;
  margin: 20px 20px 0;
  flex-direction: row;
  a { text-decoration: none; }
  @media (max-width: 700px) { flex-direction: column; }
}

h2, .site-title { font-weight: 400; }

.site-title {
  border: 5px solid transparent;
  font-size: 32px;
  padding: 20px;
  text-align: center;
  background: $nice-red;
  color: white;
  text-decoration: none;
  box-sizing: border-box;
  @media (max-width: 700px) { display: inline-flex; }
}

.nav-links {
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 12px;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  @media (max-width: 500px) { justify-content: center; }

  li {
    display: inline-flex;
    height: 30px;
    padding: 18px 0;

    a, h2 {
      color: $nicegray;
      position: relative;
      display: inline-flex;
      font-size: 28px;
      margin: 0 5px;
      transition: transform 0.2s ease, margin 0.2s ease, color 0.3s ease;
      will-change: transform, margin;

      &.router-link-active {
        $shift: 0.5px;
        transform: translateY(-3px);
        margin: 0 20px;

        h2 {
          font-weight: 700;
          margin-left: 0;
        }

        &.blog::before, &.portfolio::before, &.now::before {
          background-position: center;
          content: '';
          width: 28px;
          height: 28px;
          background-size: cover;
        }

        &.blog::before { background-image: url('/1725.png'); }
        &.portfolio::before { background-image: url('/1916.png'); }
        &.now::before { background-image: url('/1264.png'); }
      }

      &:active {
        color: rgba(black, 0.3);
        transition: none;
      }
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
