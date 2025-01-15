<script setup>
defineProps({
  Image: String,
  numOfAnimals: Number,
});
</script>

<template>
  <div class="animal-card-outter">
    <div class="animal-card-inner">
      <img :src="Image" alt="" class="animal-icon" />

      <h1>{{ numOfAnimals }}</h1>
      <p>cats</p>
    </div>
  </div>
</template>

<style lang="scss" scss scoped>
.animal-card-outter {
  display: flex;
  background-color: $color-primary;

  .animal-card-inner {
    display: flex;
    flex-direction: column;
    border: 0.25em solid $color-onBackground;
    align-items: center;
    padding: 2em 1em;
    transition: all 0.3s ease-in-out;
    width: 100%;

    &:hover {
      transform: scale(0.9);
    }

    @media (min-width: 480px) {
      width: 200px;
    }

    .animal-icon {
      object-fit: contain;
      width: 50%;
      max-height: 15vw;
      margin-bottom: 1em;

      @media (min-width: 480px) {
        width: 100%;
        margin-bottom: 2em;
        max-height: 10vw;
      }
    }
  }
}
</style>
