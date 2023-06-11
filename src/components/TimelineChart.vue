<template>
  <div ref="myDiv"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      // Your data array here
      publications: [
        {
          Title:
            "Co-occupancy analysis reveals novel transcriptional synergies for axon growth",
          Year: "2021",
          AuthorType: "First",
          Authors: [
            "Ishwariya Venkatesh",
            "Vatsal Mehra",
            "Zimei Wang",
            "Matthew T Simpson",
            "Erik Eastwood",
            "Advaita Chakraborty",
            "Zac Beine",
            "Derek Gross",
            "Michael Cabahug",
            "Greta Olson",
            "Murray G Blackmore",
          ],
          Journal: "Nature Communications",
          URL: "https://www.nature.com/articles/s41467-021-22828-3",
        },
        {
          Title:
            "Teaching Epigenetic Regulation of Gene Expression Is Critical in 21st-Century Science Education: Key Concepts and Teaching Strategies",
          Year: "2020",
          AuthorType: "First",
          Authors: ["Ishwariya Venkatesh", "Khadijah Makky"],
          Journal: "The American Biology Teacher",
          URL: "https://online.ucpress.edu/abt/article-abstract/82/6/372/111547/Teaching-Epigenetic-Regulation-of-Gene-Expression",
        },
        {
          Title:
            "KLF6 and STAT3 co-occupy regulatory DNA and functionally synergize to promote axon growth in CNS neurons",
          Year: "2018",
          AuthorType: "Last",
          Authors: [
            "Ishwariya Venkatesh",
            "Zimei Wang",
            "Vatsal Mehra",
            "Zac Beine",
            "Derek Gross",
            "Murray G Blackmore",
          ],
          Journal: "Scientific Reports",
          URL: "https://www.nature.com/articles/s41598-018-31101-5",
        },
        {
          Title:
            "Developmental chromatin restriction of pro-growth gene networks acts as an epigenetic barrier to axon regeneration in cortical neurons",
          Year: "2018",
          AuthorType: "First",
          Authors: [
            "Ishwariya Venkatesh",
            "Vatsal Mehra",
            "Zac Beine",
            "Derek Gross",
            "Murray G Blackmore",
          ],
          Journal: "Developmental Neurobiology",
          URL: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6204296/",
        },
        {
          Title:
            "Selecting Optimal Combinations of Transcription Factors to Promote Axon Regeneration: Why Mechanisms Matter",
          Year: "2017",
          AuthorType: "First",
          Authors: ["Ishwariya Venkatesh", "Murray G Blackmore"],
          Journal: "Neuroscience Letters",
          URL: "https://www.sciencedirect.com/science/article/abs/pii/S0304394016309818",
        },
        {
          Title:
            "Epigenetic profiling reveals a developmental decrease in promoter accessibility during cortical maturation in vivo.",
          Year: "2016",
          AuthorType: "First",
          Authors: [
            "Ishwariya Venkatesh",
            "Matthew T Simpson",
            "Denise M. Coley",
            "Murray G Blackmore",
          ],
          Journal: "Neuroepigenetics",
          URL: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5159751/",
        },
        {
          Title:
            "The tumor suppressor HHEX inhibits axon growth when prematurely expressed in developing central nervous system neurons.",
          Year: "2015",
          AuthorType: "First",
          Authors: [
            "Ishwariya Venkatesh",
            "Matthew T Simpson",
            "Ben L Callif",
            "Laura K Thiel",
            "Denise M Coley",
            "Kristen N Winsor",
            "Zimei Wang",
            "Audra A Kramer",
            "Jessica K Lerch",
            "Murray G Blackmore",
          ],
          Journal: "Molecular Cell Neuroscience",
          URL: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4832606/",
        },
        {
          Title:
            "MASH1/Ascl1a Leads to GAP43 Expression and Axon Regeneration in the Adult CNS",
          Year: "2015",
          AuthorType: "First",
          Authors: [
            "Ishwariya Venkatesh",
            "Ryan R Williams",
            "Damien D. Pearse",
            "Ava J. Udvadia",
            "Mary Bartlett Bunge",
          ],
          Journal: "Plos One",
          URL: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0118918",
        },
      ],
    };
  },
  methods: {
    createTimeline() {
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const width = 800 - margin.left - margin.right;
      const height = 800 - margin.top - margin.bottom;

      // Define the SVG canvas
      const svg = d3
        .select(this.$refs.myDiv)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // Create a time scale for the x-axis (you can adjust this based on your needs)
      const x = d3
        .scaleTime()
        .domain([
          new Date(
            d3.min(this.publications, (d) => d.Year),
            0,
            1
          ),
          new Date(
            d3.max(this.publications, (d) => d.Year),
            0,
            1
          ),
        ])
        .range([0, width]);

      // Create the x-axis
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      let tooltip = d3.select("#tooltip");
      // Create the circles
      const circles = svg
        .selectAll("circle")
        .data(this.publications)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(new Date(d.Year, 0, 1)))
        .attr("cy", height-50) // this will place all circles in the middle of the height of your svg
        .attr("r", 10)
        .style("fill", "#69b3a2");

      // Add interactivity for the tooltip
      circles
        .on("mouseover", function (event, d) {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(d.Title)
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", function () {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      // Add the dots
      // svg
      //   .selectAll("dot")
      //   .data(this.publications)
      //   .enter()
      //   .append("circle")
      //   .attr("r", 5)
      //   .attr("cx", (d) => x(new Date(d.Year)))
      //   .attr("cy", (_, i) => y(i))
      //   .on("mouseover", () => {
      //     d3.select(this).attr("r", 10);
      //     // You can add more interactivity here, like tooltips or a highlighted text field
      //   })
      //   .on("mouseout", () => {
      //     d3.select(this).attr("r", 5);
      //   });
    },
  },
  mounted() {
    this.createTimeline();
  },
};
</script>