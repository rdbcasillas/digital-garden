<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h4 class="title">
            This page showcases a visual representation of my educational
            background, career trajectory, and published work. In addition, it
            presents a holistic view of my diverse technical and soft skills,
            capturing the breadth and depth of my expertise.
          </h4>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <h5>Timeline of Academic and Professional Milestones</h5>
          <b-img class="skillimage" fluid src="./history.svg"></b-img>
        </b-col>
      </b-row>
      <hr />
      <b-row class="mt-4">
        <b-col>
          <h5>Roots of Expertise: A Skillset Visualization</h5>
          <b-img class="skillimage" fluid src="./myskills.svg"></b-img>
        </b-col>
      </b-row>
      <hr />
      <h3>Publications</h3>
      <b-row class="card-group">
        <b-col
          v-for="publication in publications"
          :key="publication.Title"
          md="4"
        >
          <b-card no-body border-variant="secondary">
            <b-card-body>
              <h4>
                <a :href="publication.URL" target="_blank"
                  >{{ publication.Title }}
                </a>
              </h4>
            </b-card-body>
            <b-card-text>
              <p class="publication">{{ publication.Journal }}</p>
              <p class="year">{{ publication.Year }}</p>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import publications from "@/assets/publications.json";
export default {
  name: "BackgroundPage",
  components: {},
  data() {
    return {
      publications,
    };
  },
};
</script>

<style scoped>
.title {
  text-align: justify !important;
}
#tooltip {
  position: absolute;
  text-align: justify;
  width: 120px;
  height: auto;
  padding: 3px;
  font: 15px sans-serif;
  background: lightsteelblue;
  border: 0px;
  border-radius: 8px;
  pointer-events: none;
  box-shadow: 2px 2px 1px #aaa;
}
.publication {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  color: steelblue;
}
.year {
  font-weight: bold;
  font-size: 18px;
  color: maroon;
}
.card {
  height: 100%;
}
</style>
