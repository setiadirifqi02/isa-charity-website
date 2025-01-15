<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import supportsData from "@/json/supports.json";
import SupportCard from "@/components/cards/SupportCard.vue";

const supports = ref(supportsData);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".support-card-container",
    {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".support-card-container",
      },
    },
    {
      y: 0,
      opacity: 100,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".support-card-container",
        toggleActions: "play none play reverse",
      },
      stagger: 0.2,
    }
  );
});
</script>

<template>
  <div class="support-section">
    <h2>Socially active citizens</h2>
    <div class="support-text">
      <p>support us</p>
    </div>
    <div class="support-list">
      <div
        v-for="support in supports"
        :key="support.id"
        class="support-card-container"
      >
        <SupportCard
          :image="support.image"
          :name="support.name"
          :title="support.title"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.support-section {
  display: flex;
  flex-direction: column;
  @include paddingVertical;
  @include paddingHorizontal;
  background-color: $color-accent;
  color: $color-onBackground;

  h2 {
    @include mainHeading;
  }

  .support-text {
    margin-top: 0.5em;
    margin-bottom: 1em;
    line-height: 1.5em;
    @include contentFontSize;
  }

  .support-list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 4%;
    margin-top: 2em;

    @media (min-width: 480px) {
      column-gap: 3%;
    }

    .support-card-container {
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
