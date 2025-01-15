<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import partnersData from "@/json/partners.json";
import PartnerCard from "@/components/cards/PartnerCard.vue";

const partners = ref(partnersData);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".partner-card-container",
    {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".partner-card-container",
      },
    },
    {
      y: 0,
      opacity: 100,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".partner-card-container",
        toggleActions: "play none play reverse",
        // markers: true,
      },
      stagger: 0.2,
    }
  );
});
</script>

<template>
  <div class="partners-section">
    <h2>Our Partners</h2>
    <div class="partners-text">
      <p>are take care of our fund and help us with many questions</p>
    </div>
    <div class="partners-list">
      <div
        v-for="partner in partners"
        :key="partner.id"
        class="partner-card-container"
      >
        <PartnerCard :image="partner.image" :name="partner.name" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partners-section {
  display: flex;
  flex-direction: column;
  @include paddingVertical;
  @include paddingHorizontal;
  background-color: $color-background;
  color: $color-onBackground;

  h2 {
    @include mainHeading;
  }

  .partners-text {
    margin-top: 0.5em;
    margin-bottom: 1em;
    line-height: 1.5em;
    @include contentFontSize;
  }

  .partners-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 8%;
    margin-top: 2em;

    @media (min-width: 480px) {
      column-gap: 5%;
    }

    @media (min-width: 480px) {
      column-gap: 4%;
    }

    .partner-card-container {
      display: flex;

      margin-bottom: 1.2rem;
      width: 46%;

      @media (min-width: 480px) {
        width: 30%;
      }

      @media (min-width: 800px) {
        width: 22%;
      }
    }
  }
}
</style>
