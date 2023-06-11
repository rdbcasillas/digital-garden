import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TimeLine from "../views/TimeLine.vue";
import AboutView from "../views/AboutView.vue";
import CoachingPage from "../views/CoachingPage.vue";
import BackgroundPage from "../views/BackgroundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/timeline",
    name: "timeline",
    component: TimeLine,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/coaching",
    name: "coaching",
    component: CoachingPage,
  },
  {
    path: "/background",
    name: "background",
    component: BackgroundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
