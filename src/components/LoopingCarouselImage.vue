<script setup>
import { ref, onMounted } from "vue";
import dog from "/assets/images/logo/dog.svg";
import cat from "/assets/images/logo/cat.svg";

const images = ref([dog, cat]);
const currentIndex = ref(0);
const nextIndex = ref(null);

onMounted(() => {
  setInterval(() => {
    nextIndex.value = (currentIndex.value + 1) % images.value.length;

    setTimeout(() => {
      currentIndex.value = nextIndex.value;
      nextIndex.value = null; // Reset `nextIndex` after animation complete
    }, 1000); // duration of image
  }, 1300); // Duration between images
});
</script>

<template>
  <div class="image-container">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      :class="{
        entering: nextIndex === index,
        leaving: currentIndex === index,
        hidden: currentIndex !== index && nextIndex !== index,
      }"
      class="animated-image"
    />
  </div>
</template>

<style lang="scss" scoped>
.image-container {
  position: relative;

  width: 120px;
  height: 100px;
  overflow: hidden;

  @media (min-width: 480px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 800px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 1400px) {
    width: 400px;
    height: 400px;
  }
}

.animated-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  opacity: 0;
  transition: transform 0.5s ease, opacity 1s ease;
}

.animated-image.hidden {
  transform: translateY(-100%);
  opacity: 0;
}

.animated-image.entering {
  transform: translateY(-100%);
  opacity: 1;
  animation: enter 0.5s ease forwards;
}

.animated-image.leaving {
  transform: translateY(0);
  opacity: 1;
  animation: leave 0.5s ease forwards;
}

/* Animasi untuk gambar yang masuk */
@keyframes enter {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Animasi untuk gambar yang keluar */
@keyframes leave {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
