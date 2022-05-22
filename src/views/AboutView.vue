<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import family from "../assets/images/family.avif";
import wedding from "../assets/images/wife.avif";
import mtb from "../assets/images/mtb.avif";
import surfing from "../assets/images/surfing.avif";
import moto from "../assets/images/moto.avif";

const IMAGES = [
  {
    alt: "family photo",
    path: family,
  },
  {
    alt: "wedding photo",
    path: wedding,
  },
  {
    alt: "friends mountain biking",
    path: mtb,
  },
  {
    alt: "friends surfing",
    path: surfing,
  },
  {
    alt: "father and son riding dirtbikes",
    path: moto,
  },
];
export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      images: IMAGES,
      display: 3.5,
    };
  },

  methods: {
    onResize() {
      if (window.innerWidth > 2000) {
        this.display = 3.5;
      } else if (window.innerWidth > 1200) {
        this.display = 2.5;
      } else if (window.innerWidth > 900) {
        this.display = 2;
      } else {
        this.display = 1;
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<template>
  <main>
    <div>
      <h2>About me</h2>
      <p>
        I have been working on front end teams since 2019, my interest lies in
        the
        <a
          href="https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/#:~:text=Back%2Dof%2Dthe%2Dfront%2Dend%20developers,-A%20definition%3A%20A&text=Writing%20application%20business%20logic%20to,the%20application%20to%20function%20properly."
          >"back of the frontend"</a
        >
        and with various JavaScript frameworks. My favorites currently are
        Vue.js, Svelte, and Node for building backend utilities, but I am always
        exploring for tools that are the best fit for each situation. Each
        unique problem is an opportunity to learn something new and I am always
        excited for the next challenge.
      </p>
      <p>
        When I am not working I spend time with my wife and daughter. I enjoy
        cooking, mountain biking, going to the gym, and am an avid fan of
        motocross racing.
      </p>
      <br />
      <carousel snap-align="start" :items-to-show="display">
        <slide v-for="image in images" :key="image">
          <img :src="image.path" :alt="image.alt" />
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </main>
</template>
<style>
:root {
  --vc-nav-background-color: var(--buttonColor);
  --vc-pgn-background-color: var(--buttonColor);
  --vc-pgn-active-color: var(--darkPurp);
}
img {
  height: 350px;
}
</style>
