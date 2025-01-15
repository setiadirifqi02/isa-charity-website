<script setup>
import LoopingCarousel from "@/components/LoopingCarouselImage.vue";
</script>
<template>
  <div class="not-found-page">
    <div class="carousel-image">
      <LoopingCarousel />
    </div>
    <h1>Not Found <br />404</h1>
    <RouterLink to="/"> Back Home </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: $color-primary;
  text-align: center;

  .carousel-image {
    margin-left: 3rem;

    @media (min-width: 1020px) {
      margin-left: 8rem;
    }
  }

  h1 {
    @include mainHeading;
  }
  a {
    margin-top: 2rem;
    padding: 0.5rem;
    border: solid 0.25rem $color-onBackground;
    font-size: 0.8rem;
    background-color: $color-background;
    font-weight: 400;
  }
}
</style>
