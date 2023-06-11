<template>
  <div>
    <b-row>
      <b-col style="text-align: justify">
        <h3>In search of our untapped potential</h3>
        <p>
          Society has let us down. Our education, fixated on career preparation,
          neglects the art of living, leaving us estranged from our authentic
          selves. We find ourselves chasing hollow validation and surface-level
          success, overlooking the true treasure of self-understanding and
          personal development. We need to shift this narrative, delve deeper,
          and unlock our untapped potential for a more enriching and fulfilling
          life.
        </p>
        <h3>My Philosophy</h3>
        <p>
          Central to my coaching philosophy is the transformative power of
          empathy and understanding. True listening goes beyond merely hearing
          words; it involves grasping your unique experiences, emotions, and
          aspirations. In creating a safe and supportive environment, my goal is
          not just to understand your concerns but to catalyze action. By deeply
          understanding your situation, we can collaboratively devise
          action-oriented strategies that address your challenges and improve
          the state of your life.
        </p>
        <h3>The Power of Rationality</h3>
        <p>
          What sets my coaching apart is the use of applied rationality
          techniques. This means we will use practical, well tested methods to
          address your challenges. By understanding the thought patterns that
          may be hindering your progress, we can develop bulletproof plans and
          strategies that are custom-tailored to your circumstances. This
          approach combines intuition with evidence-based methods to ensure that
          our solutions are both practical and effective. For a better
          understanding of the potential techniques we could incorporate in our
          sessions, feel free to delve into a previous course I've taught on
          <a
            href="https://year-one.hyperlink.academy/courses/introduction-to-applied-rationality/54"
            >Instrumental Rationality</a
          >.
        </p>
        <h3>Experience and Success</h3>
        <p>
          Over the years, I have had the privilege of helping many individuals
          overcome a variety of personal and professional hurdles. These
          experiences have not only honed my coaching skills but also deepened
          my understanding of the diverse challenges people face. As we work
          together, you'll benefit from this breadth of experience and my
          unwavering commitment to your success.
        </p>
        <h3>Take the Next Step</h3>
        <p>
          Ready to embark on your self-improvement journey? Let's start with a
          one-on-one session to understand your needs and goals better. Every
          journey starts with a single step, and by booking a session, you're
          taking that vital first step towards a more fulfilling personal and
          professional life.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <!-- Calendly inline widget begin -->
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/vatsalmehra?hide_gdpr_banner=1"
          style="min-width: 320px; height: 700px"
        ></div>
        <!-- Calendly inline widget end -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "CoachingPage",
  mounted() {
    // Calendly inline widget begin
    (function () {
      var d = document;
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  },
};
</script>

<style scoped>
h2 {
  font-size: 32px;
  margin-top: 50px;
}

p {
  font-size: 18px;
  line-height: 1.5;
}

label {
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-top: 20px;
}

input[type="text"],
input[type="date"],
input[type="time"] {
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 400px;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  background-color: #18b4e3;
  color: #fff;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #0f8ba9;
}
</style>
