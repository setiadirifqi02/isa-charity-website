<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import projectData from "@/json/projects.json";
import ProjetcCard from "@/components/cards/ProjectCard.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const projects = ref(projectData);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    ".project-card",
    {
      x: -200,
      opacity: 0,
      duration: 3,
      scrollTrigger: { trigger: ".project-card" },
    },
    {
      x: 0,
      opacity: 100,

      scrollTrigger: {
        trigger: ".project-card",
        toggleActions: "play none play reverse",
      },
      stagger: 0.8,
    }
  );
});
</script>

<template>
  <div class="padding-vertical"></div>
  <div class="project-section">
    <h2>Our Projects</h2>
    <div class="project-text">
      <p>
        are very different in terms of priority, scale and complexity of
        implementation
      </p>
    </div>
    <div class="projects-list">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <ProjetcCard
          :subTitle="project.title"
          :content="project.description"
          :bgColor="project.bgColor"
          :link="project.link"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.padding-vertical {
  @include paddingVertical;
}
.project-section {
  display: flex;
  flex-direction: column;
  @include paddingVertical;
  @include paddingHorizontal;
  background-color: $color-tersary;
  color: $color-background;

  h2 {
    @include mainHeading;
  }

  .project-text {
    margin-top: 0.5em;
    margin-bottom: 1em;
    line-height: 1.5em;
    @include contentFontSize;
  }
  .projects-list {
    margin-top: 2em;
    display: flex;
    flex-flow: column;
    column-gap: 2em;
    row-gap: 2em;

    @media (min-width: 800px) {
      margin-top: 4em;
    }
  }
}
</style>
