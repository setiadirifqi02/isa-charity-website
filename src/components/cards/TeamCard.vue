<script setup>
defineProps({
  image: {
    type: String,
    default: "/assets/images/team/cat.svg",
  },
  name: {
    type: String,
    default: "Office Staff",
  },
  title: {
    type: String,
    default: "Open Vacancy",
  },
});
</script>

<template>
  <div class="team-card-wrapper">
    <div class="team-card">
      <img :src="`${image}`" :alt="`${name}`" class="team-pict" />
      <p class="team-name">{{ name }}</p>
      <p class="team-title">{{ title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-card-wrapper {
  display: flex;
  background-color: $color-primary;
  .team-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding: 1rem;
    @include borderContent($color-onBackground);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(0.9);
    }

    @media (min-width: 480px) {
      padding: 2rem;
    }

    .team-pict {
      filter: contrast(110%) grayscale(100%);
      object-fit: cover;
      width: 100%;
      height: auto;
      margin-bottom: 1em;

      @media (min-width: 480px) {
        margin-bottom: 2em;
      }
    }

    .team-name {
      font-size: 3.5vw;
      margin-bottom: 0.5em;
      text-align: center;
      line-height: 1.25em;
      @media (min-width: 480px) {
        font-size: 3vw;
      }
      @media (min-width: 800px) {
        font-size: 1.5vw;
      }
    }

    .team-title {
      font-size: 3vw;
      margin-bottom: 0.5em;
      text-align: center;
      font-weight: 400;
      line-height: 1.5em;
      @media (min-width: 480px) {
        font-size: 2.5vw;
      }
      @media (min-width: 800px) {
        font-size: 1.25vw;
      }
    }
  }
}
</style>
