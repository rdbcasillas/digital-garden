<template>
  <b-navbar
    toggleable="lg"
    id="navbar"
    fixed="top"
    :class="{ 'navbar-scrolled': isScrolled }"
    type="transparent"
    variant="light"
  >
    <b-navbar-brand href="#"> Vatsal's Digital Garden </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse" :toggler-class="'navbar-toggler-custom'">
      <b-icon icon="menu-up"></b-icon>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="#about" @click.prevent="smoothScroll('about')"
          >About</b-nav-item
        >
        <b-nav-item to="coaching">Coaching</b-nav-item>
        <b-nav-item to="background">Backstory</b-nav-item>
        <!-- <b-nav-item href="#education" @click.prevent="smoothScroll('education')"
          >Education</b-nav-item
        >
        <b-nav-item href="#skills" @click.prevent="smoothScroll('skills')"
          >Skills</b-nav-item
        > -->
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
      isNavCollapsed: true,
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    },
    shouldCollapse() {
      return this.isMobile || this.isNavCollapsed;
    },
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

    // Update isMobile when window size changes
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth < 768;
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.isScrolled);
    window.removeEventListener("resize", this.isMobile);
  },
};
</script>

<style scoped>
/* #navbar {
  transition: all 0.3s;
  padding: 1rem;
  background: transparent;
} */

.navbar-scrolled {
  background: rgba(0, 0, 0, 0.8);
}

.b-nav-item {
  cursor: pointer;
}


</style>
