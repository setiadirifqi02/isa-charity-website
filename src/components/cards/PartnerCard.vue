<script setup>
defineProps({
  image: String,
  name: {
    type: String,
    default: "Our Partner",
  },
});
</script>

<template>
  <div class="support-card">
    <img :src="`${image}`" :alt="`${name}`" class="support-pict" />
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
    filter: grayscale(100%);
    object-fit: cover;
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
