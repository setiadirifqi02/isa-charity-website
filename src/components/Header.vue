<script setup></script>

<template>
  <RouterLink to="/donate"> donate </RouterLink>
</template>

<style lang="scss" scoped>
a {
  position: fixed;
  z-index: 20;
  right: 30px;
  top: 40px;
  padding: 0.25em 0.5em;
  font-size: 4vw;
  background-color: $color-background;
  @include borderContent($color-onBackground);
  transition: all ease-in-out 0.2s;

  &:hover {
    translate: 10px -10px;
  }

  @media (min-width: 480px) {
    font-size: 2.5vw;
  }

  @media (min-width: 800px) {
    font-size: 2vw;
  }
}
</style>
