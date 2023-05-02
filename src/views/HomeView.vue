<template>
  <div>
    <b-container class="landing-page">
      <b-row class="justify-content-center align-items-center hero-section">
        <b-col md="6">
          <img src="mypic.jpg" alt="Your image" class="img-fluid hero-image" />
          <h1 class="display-4">Your Name</h1>
          <p class="lead">
            Bioinformatician and a Software Developer with over 10 years of
            experience specializing in NGS pipelines, web development and data
            visualization. Skilled at delivering interactive tools for
            researchers, that provide novel insights in healthcare sector and
            biomedical sciences. Adept at learning new technologies
            autodidactically and flexible with different tech stacks. Loves
            <a href="http://rdbcasillas.github.io">writing</a>,
            <a href="https://open.spotify.com/show/79oICYy7ndxZIrQQWunirp"
              >podcasting</a
            >
            and
            <a
              href="https://year-one.hyperlink.academy/courses/introduction-to-applied-rationality/54"
              >teaching rationality</a
            >.
          </p>
          <p class="lead">
            Occassionally, I also work with people directly to help with their
            personal and professional issues using numerous
            <a
              href="https://www.lesswrong.com/posts/RcZCwxFiZzE6X7nsv/what-do-we-mean-by-rationality-1"
              >instrumental rationality</a
            >
            techniques and frameworks (see projects section below for an
            overview of my public work). If you are interested in a
            coaching/career counselling session, please schedule a spot
            <a href="https://calendly.com/vatsalmehra/60-min-chat">here</a>.
          </p>
          <b-button variant="primary" href="#about">Learn More</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  padding-top: 5rem;
}

.hero-section {
  height: 100%;
}

.hero-image {
  max-width: 300px;
  margin-bottom: 2rem;
  border-radius: 50%;
}
.lead {
  text-align: justify !important;
}
</style>
