<script setup>
defineProps({
  image: {
    type: String,
    default: "/assets/images/team/cat.svg",
  },
  name: {
    type: String,
    default: "Cat",
  },
  title: {
    type: String,
    default: "Paws Friends",
  },
});
</script>

<template>
  <div class="support-card">
    <img :src="`${image}`" :alt="`${name}`" class="support-pict" />
    <p class="support-name">{{ name }}</p>
    <p class="support-title">{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.support-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  .support-pict {
    filter: contrast(110%) grayscale(100%);
    object-fit: cover;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;

    @media (min-width: 480px) {
      margin-bottom: 2em;
    }
  }

  .support-name {
    font-size: 3.5vw;
    margin-bottom: 0.5em;
    text-align: center;
    line-height: 1.25em;
    @media (min-width: 480px) {
      font-size: 2.5vw;
    }
    @media (min-width: 800px) {
      font-size: 1.5vw;
    }
  }

  .support-title {
    font-size: 3vw;
    margin-bottom: 0.5em;
    text-align: center;
    font-weight: 400;
    line-height: 1.5em;
    @media (min-width: 480px) {
      font-size: 2vw;
    }
    @media (min-width: 800px) {
      font-size: 1.25vw;
    }
  }
}
</style>
