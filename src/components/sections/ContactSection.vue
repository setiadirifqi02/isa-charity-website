<script setup>
import { onMounted } from "vue";
import SocialLink from "@/components/SocialLink.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    ".contact-hero",
    {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".contact-hero",
      },
    },
    {
      y: 0,
      opacity: 100,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".contact-hero",
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    }
  );
});
</script>

<template>
  <div class="contact-section">
    <div class="contact-container">
      <h2>Contact us</h2>
      <div class="contact-text">
        <p>Kyiv, Ukraine</p>
        <div class="contact-mail">
          <a href="mailto:mail@isa.co.ua?subject=You%27ve%20got%20an%20email!"
            >mail@isa.co.ua</a
          >
        </div>
      </div>
      <SocialLink />
    </div>
    <div class="contact-hero">
      <img src="/assets/images/animals.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  @include paddingVertical;
  @include paddingHorizontal;
  background-color: $color-secondary;
  color: $color-onBackground;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 0;
  }

  h2 {
    @include mainHeading;
  }
  .contact-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;

    @media (min-width: 800px) {
      width: 50%;
    }

    .contact-text {
      margin-top: 0.5em;
      margin-bottom: 1em;
      line-height: 1.5em;
      @include contentFontSize;

      .contact-mail {
        transition: all 0.3s ease-in-out;
        text-align: left;
        width: fit-content;

        &:hover {
          transform: scale(90%);
        }
      }
    }
  }
  .contact-hero {
    flex: 1;
    width: 100%;

    @media (min-width: 480px) {
      width: 50%;
    }

    @media (min-width: 800px) {
      width: 50%;
    }

    img {
      width: 100%;
    }
  }
}
</style>
