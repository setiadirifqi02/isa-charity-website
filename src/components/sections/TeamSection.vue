<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamData from "@/json/team.json";
import TeamCard from "@/components/cards/TeamCard.vue";

const teams = ref(teamData);
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".team-card-container",
    {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".team-card-container",
      },
    },
    {
      y: 0,
      opacity: 100,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".team-card-container",
        toggleActions: "play none play reverse",
      },
      stagger: 0.2,
    }
  );
});
</script>

<template>
  <div class="team-section">
    <h2>Our team</h2>
    <div class="team-text">
      <p>
        consists of completely different people who are united by a common
        desire - to help
      </p>
    </div>
    <div class="team-list">
      <div v-for="team in teams" :key="team.id" class="team-card-container">
        <TeamCard :image="team.image" :name="team.name" :title="team.title" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-section {
  display: flex;
  flex-direction: column;
  @include paddingVertical;
  @include paddingHorizontal;
  background-color: $color-background;
  color: $color-onBackground;

  h2 {
    @include mainHeading;
  }

  .team-text {
    margin-top: 0.5em;
    margin-bottom: 1em;
    line-height: 1.5em;
    @include contentFontSize;
  }

  .team-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2em;

    .team-card-container {
      display: flex;
      margin-bottom: 1.2rem;
      width: 48%;

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
