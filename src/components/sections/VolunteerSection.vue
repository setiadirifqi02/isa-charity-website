<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import volunteerData from "@/json/volunteer";
import VolunteerCard from "@/components/cards/VolunteerCard.vue";
import rightArrow from "/assets/icons/right-arrow.svg";

const volunteers = ref(volunteerData);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".volunteer-card-wrapper",
    {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".volunteer-card-wrapper",
      },
    },
    {
      y: 0,
      opacity: 100,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".volunteer-card-wrapper",
        toggleActions: "play none play reverse",
        // markers: true,
      },
      stagger: 0.2,
    }
  );

  gsap.fromTo(
    ".apply-help-link",
    {
      x: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".apply-help-link",
      },
    },
    {
      x: 0,
      opacity: 100,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".apply-help-link",
        start: "top 75%",
        end: "botom 25%",
        toggleActions: "play none play reverse",
        // markers: true,
      },
    }
  );
});
</script>

<template>
  <div class="volunteer-section">
    <h2>We want to help</h2>
    <div class="volunteer-text">
      <p>
        homeless packs, volunteers, guardians, overstayers, shelters and other
        organisations
      </p>
    </div>
    <div class="volunteer-list">
      <div
        class="volunteer-card-wrapper"
        v-for="volunteer in volunteers"
        :key="volunteer.id"
      >
        <VolunteerCard :volunteerName="volunteer.name" />
      </div>
    </div>
    <RouterLink to="/apply-for-help">
      <div class="apply-help-link">
        <a> apply for help </a>
        <img :src="rightArrow" alt="" class="arrow" />
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.volunteer-section {
  display: flex;
  flex-direction: column;
  @include paddingVertical;
  @include paddingHorizontal;
  background-color: $color-primary;
  color: $color-onBackground;

  h2 {
    @include mainHeading;
  }

  .volunteer-text {
    margin-top: 0.5em;
    margin-bottom: 1em;
    line-height: 1.5em;
    @include contentFontSize;
  }

  .volunteer-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: start;
    align-items: stretch;
    column-gap: 1em;
    row-gap: 2em;
    margin-top: 2em;

    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .apply-help-link {
    display: flex;
    align-items: center;
    width: 60%;
    margin-top: 10%;
    justify-content: space-between;
    background-color: $color-accent;
    padding: 0.5rem 1rem;
    @include borderContent($color-onBackground);
    font-size: 3.5vw;
    font-weight: 700;

    @media (min-width: 480px) {
      font-size: 2vw;
      width: 35%;
    }

    @media (min-width: 800px) {
      font-size: 1.75vw;
      width: 30%;
    }

    &:hover {
      .arrow {
        translate: 15px;
      }
    }

    .arrow {
      transition: all 0.3s ease-in-out;
      height: 2rem;
    }
  }
}
</style>
