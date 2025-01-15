<script setup>
import { ref } from "vue";
import SlideImage1 from "/assets/images/image-slide-1.jpeg";
import SlideImage2 from "/assets/images/image-slide-2.jpeg";
import SlideImage3 from "/assets/images/image-slide-3.jpeg";

const images = ref([SlideImage1, SlideImage2, SlideImage3]);

const currentIndex = ref(0);

// console.log(currentIndex.value + " on mounted");

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
  console.log(currentIndex.value, images.value.length);
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
  console.log(currentIndex.value);
};

const currentImages = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="slider-container">
    <div class="slide-control">
      <button class="nav-btn" @click="prevSlide">&lt</button>
      <button class="nav-btn" @click="nextSlide">></button>
    </div>
    <div class="image-container">
      <img :src="images[currentIndex]" alt="Slide image" />
    </div>

    <div class="slide-control-bullet">
      <div v-for="(image, index) in images" :key="index">
        <button
          :class="['bullets', { active: index === currentIndex }]"
          @click="currentImages(index)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 0.5rem;
  border: 2px solid black;
  position: relative;

  .image-container {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    max-width: 90vh;
    min-height: 75vh;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }

  .slide-control {
    position: absolute;
    z-index: 40;
    display: flex;
    width: 100%;
    justify-content: space-between;
    .nav-btn {
      height: fit-content;
      background: none;
      border: none;
      font-size: 8vw;
      cursor: pointer;
      padding: 0.5rem;
    }
  }

  .slide-control-bullet {
    display: flex;
    gap: 0.5em;
    position: absolute;
    bottom: 10px;

    button {
      display: flex;
      padding: 0.4rem;
      justify-content: center;
      align-items: center;
      background-color: #ece2e2;
      border: 0;
    }
  }
  .bullets.active {
    background-color: $color-primary;
  }
}
</style>
