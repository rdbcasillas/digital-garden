<template>
  <b-navbar
    id="navbar"
    fixed="top"
    :class="{ 'navbar-scrolled': isScrolled }"
    type="transparent"
    variant="light"
  >
    <b-navbar-brand href="#"> YourName </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#about" @click.prevent="smoothScroll('about')"
          >About</b-nav-item
        >
        <b-nav-item href="#portfolio" @click.prevent="smoothScroll('portfolio')"
          >Portfolio</b-nav-item
        >
        <b-nav-item href="#blog" @click.prevent="smoothScroll('blog')"
          >Blog</b-nav-item
        >
        <b-nav-item href="#contact" @click.prevent="smoothScroll('contact')"
          >Contact</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    smoothScroll(targetId) {
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.isScrolled = window.scrollY > 0;
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.isScrolled);
  },
};
</script>

<style scoped>
#navbar {
  transition: all 0.3s;
  padding: 1rem;
  background: transparent;
}

.navbar-scrolled {
  background: rgba(0, 0, 0, 0.8);
}

.b-nav-item {
  cursor: pointer;
}
</style>
