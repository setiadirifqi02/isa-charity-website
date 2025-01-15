<script setup>
import Header from "@/components/Header.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import VolunteerSection from "@/components/sections/VolunteerSection.vue";
import TeamSection from "@/components/sections/TeamSection.vue";
import SupportsSection from "@/components/sections/SupportsSection.vue";
import PartnersSection from "@/components/sections/PartnersSection.vue";
</script>

<template>
  <div class="main-container">
    <Header />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <VolunteerSection />
    <TeamSection />
    <SupportsSection />
    <PartnersSection />
  </div>
</template>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
}
</style>
