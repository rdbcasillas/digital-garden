<template>
  <div>
    <b-container class="landing-page">
      <b-row class="justify-content-center align-items-center hero-section">
        <b-col md="6">
          <img src="mypic.jpg" alt="Your image" class="img-fluid hero-image" />
          <p class="lead">
            With a career spanning over a decade as a Bioinformatician and
            Software Developer, I have honed my expertise in the analysis and
            interpretation of large-scale genomic data, web development, and
            data visualization. My proficiency lies in crafting interactive
            tools for researchers, offering groundbreaking insights in the
            healthcare and biomedical sectors. My leadership skills, coupled
            with a passion for building exceptional products, have been
            instrumental in driving successful outcomes. I'm a lifelong learner,
            swiftly adapting to diverse tech stacks and continuously picking up
            new technologies. Outside of my professional pursuits, I indulge in
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
            On occasion, I extend my scope of work to engage with individuals
            directly, aiding in their personal and professional development. I
            employ a range of instrumental rationality techniques and frameworks
            to help my clients navigate their challenges (you can explore an
            overview of my public work in the projects section below). If you
            are keen on scheduling a coaching or career counseling session, feel
            free to book a spot
            <a href="https://calendly.com/vatsalmehra/60-min-chat">here</a>.
          </p>
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
.hero-section {
  height: 100%;
}

.skillset {
  position: relative;
  padding-bottom: 85.25%;
  padding-top: 30px;
  height: 800;
  overflow: auto;
  -webkit-overflow-scrolling: touch; /*<<--- THIS IS THE KEY*/
  border: solid black 1px;
}
.hero-image {
  max-width: 300px;
  margin-bottom: 2rem;
  border-radius: 50%;
}
.lead {
  text-align: justify !important;
}
.skillimage {
  max-width: 100%;
  width: 1000px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid;
}
</style>
