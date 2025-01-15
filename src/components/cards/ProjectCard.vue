<script setup>
defineProps({
  subTitle: String,
  content: String,
  bgColor: {
    type: String,
    default: "color-onBackground",
  },
  link: String,
});
</script>

<template>
  <RouterLink :to="`${link}`">
    <div :class="`project-card-outter ${bgColor}`">
      <div class="project-card-container">
        <p class="project-title">{{ subTitle }}</p>
        <p class="project-desc">{{ content }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
a {
  color: #fff;
}

.project-card-outter {
  display: flex;
  .project-card-container {
    display: flex;
    flex-direction: column;
    padding: 2em 3em;
    @include borderContent(#fff);
    transition: all 0.2s ease-in-out;

    &:hover {
      translate: 20px -20px;
    }

    @media (min-width: 458px) {
      padding: 4em;
    }

    .project-title {
      font-size: 6vw;
      font-weight: 700;
      line-height: 1.5em;

      @media (min-width: 458px) {
        font-size: 3.5vw;
      }
    }

    .project-desc {
      margin-top: 0.5em;
      font-size: 3.75vw;
      line-height: 1.25em;

      @media (min-width: 458px) {
        font-size: 2.5vw;
      }

      @media (min-width: 800px) {
        font-size: 2vw;
      }
    }
  }
}
.color-onBackground {
  background-color: $color-onBackground;
}

.color-secondary {
  background-color: $color-secondary;
}

.color-accent {
  background-color: $color-accent;
}
</style>
