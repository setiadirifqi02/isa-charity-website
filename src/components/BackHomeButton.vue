<script setup>
import LeftArrow from "/assets/icons/left-arrow.svg";
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/">
    <div class="back-home-button">
      <img :src="LeftArrow" alt="" class="arrow" />
      <a> back to homepage </a>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.back-home-button {
  display: flex;
  align-items: center;
  width: 55%;
  margin-top: 10%;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 3.5vw;
  font-weight: 700;

  @media (min-width: 480px) {
    font-size: 2vw;
    width: 30%;
  }

  @media (min-width: 800px) {
    font-size: 1.75vw;
    width: 25%;
  }

  &:hover {
    .arrow {
      translate: -15px;
    }
  }

  .arrow {
    transition: all 0.3s ease-in-out;
    height: 2rem;
  }
}
</style>
