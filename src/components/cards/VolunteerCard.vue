<script setup>
defineProps({
  volunteerName: String,
});
</script>

<template>
  <div class="card-volunteer-wrapper">
    <RouterLink :to="{ name: 'Shelter', params: { id: `${volunteerName}` } }">
      {{ volunteerName }}
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.card-volunteer-wrapper {
  display: flex;
  height: 100%;
  background-color: $color-background;
  a {
    @include flexContent(center, center);
    padding: 2em;
    @include borderContent($color-onBackground);
    width: 100%;
    text-transform: capitalize;
    text-align: center;
    font-size: 3.5vw;
    line-height: 1.25em;
    transition: all 0.3s ease-in-out;

    &:hover {
      translate: 10px -20px;
    }

    @media (min-width: 458px) {
      font-size: 2.5vw;
    }

    @media (min-width: 800px) {
      font-size: 1.5vw;
    }
  }
}
</style>
