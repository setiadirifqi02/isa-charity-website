<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SocialLink from "@/components/SocialLink.vue";
import LoopingCarouselImage from "../LoopingCarouselImage.vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".hero-brand",
    {
      y: -150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero-brand",
      },
    },
    {
      y: 0,
      opacity: 100,
      scrollTrigger: {
        trigger: ".hero-brand",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".hero-headline",
    {
      x: 80,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero-headline",
      },
    },
    {
      x: 0,
      opacity: 100,
      scrollTrigger: {
        trigger: ".hero-headline",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".hero-text",
    {
      y: 200,
      opacity: 0,
      duration: 10,
      scrollTrigger: {
        trigger: ".hero-text",
      },
    },
    {
      y: 0,
      opacity: 100,
      scrollTrigger: {
        trigger: ".hero-text",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".hero-social-link",
    {
      y: 150,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".hero-social-link",
      },
    },
    {
      y: 0,
      opacity: 100,
      scrollTrigger: {
        trigger: ".hero-social-link",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
</script>

<template>
  <div class="hero-section">
    <div class="hero-logo-wrapper">
      <div class="hero-brand-wrapper"></div>
      <div class="hero-brand">
        <LoopingCarouselImage />
      </div>
      <div class="hero-headline">
        <h1>Innovative <br />Solutions<br />for Animals</h1>
      </div>
    </div>
    <p class="hero-text">Charity organization</p>
    <div class="hero-social-link">
      <SocialLink />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-section {
  background-color: $color-primary;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @include flexContent(center, center);

  .hero-logo-wrapper {
    display: flex;
    max-width: 60vw;
    margin-bottom: 0.6rem;
    @include flexContent(center, center);
    position: relative;

    .hero-brand {
      position: absolute;
      display: flex;
      margin-top: 2rem;
      margin-right: 7rem;

      @media (min-width: 480px) {
        margin-top: 6rem;
        margin-right: 9rem;
      }

      @media (min-width: 800px) {
        margin-top: 10rem;
        margin-right: 14rem;
      }

      @media (min-width: 1200px) {
        margin-top: 12rem;
        margin-right: 20rem;
      }

      @media (min-width: 1400px) {
        margin-top: 14rem;
        margin-right: 23rem;
      }
    }

    .hero-headline {
      margin-left: 5rem;
    }

    @media (min-width: 480px) {
      max-width: 50vw;
    }

    h1 {
      font-size: 6.1vw;
      font-weight: 700;
      line-height: 1em;
      width: 80%;
      @media (min-width: 480px) {
        font-size: 5.1vw;
        width: 100%;
      }

      @media (min-width: 800px) {
        font-size: 5.1vw;
        width: 100%;
      }
    }
  }

  p {
    font-size: 3.75vw;
    @media (min-width: 480px) {
      margin-top: 2rem;
      font-size: 2.5vw;
    }
  }
}
</style>
