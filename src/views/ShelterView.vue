<script setup>
import { useRoute } from "vue-router";

import Heroimage from "/assets/images/shelter-hero-image.jpg";
import dog from "/assets/images/logo/dog.svg";
import cat from "/assets/images/logo/cat.svg";

import AnimalsCard from "@/components/cards/AnimalsCard.vue";
import BackHomeButton from "@/components/backhomebutton.vue";
import ImageSlider from "../components/ImageSlider.vue";

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div class="shelter-page">
    <img :src="Heroimage" alt="hero-image" class="hero-image" />
    <div class="main-container">
      <h1>{{ $route.params.id }}</h1>
      <div class="animal-card-wrapper">
        <AnimalsCard :Image="dog" :numOfAnimals="9" />
        <AnimalsCard :Image="cat" :numOfAnimals="4" />
      </div>
      <div class="content-wrapper">
        <div class="needs-grid">
          <p>
            <strong>Address: </strong>
          </p>
          <p>Chernihiv</p>
          <p>
            <strong>Food needs per month:</strong>
          </p>
          <p>900 kg</p>
          <p>
            <strong>Medicine needs:</strong>
          </p>
          <p>Deworming. Treatment against fleas and ticks</p>
          <p>
            <strong>Other needs:</strong>
          </p>
          <p>Carrying bags. Flipper</p>
        </div>
      </div>

      <ImageSlider />

      <BackHomeButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shelter-page {
  display: flex;
  flex-direction: column;

  .main-container {
    @include paddingHorizontal;
    @include paddingVertical;

    .hero-image {
      object-fit: cover;
      width: 100%;
      max-height: 80vh;
    }

    h1 {
      font-size: 8vw;
      font-weight: 700;
      line-height: 1.25em;
      text-transform: capitalize;

      @media (min-width: 480px) {
        font-size: 4vw;
        width: 100%;
      }
    }

    .animal-card-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 2rem;
      row-gap: 2rem;
      margin-top: 4em;
      width: 100%;

      @media (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        width: fit-content;
      }
    }
    .content-wrapper {
      margin: 2rem 0;

      .needs-grid {
        display: grid;
        grid-template-columns: 0.475fr 1fr;
        grid-auto-columns: 1fr;
        column-gap: 2rem;
        row-gap: 2rem;

        @media (min-width: 480px) {
          row-gap: 1rem;
        }
      }

      p {
        margin-top: 0.5em;
        margin-bottom: 1em;
        line-height: 1.5em;
        @include contentFontSize;

        @media (min-width: 480px) {
          margin-bottom: 0;
          font-size: 2vw;
        }
      }

      ul {
        padding-left: 40px;
        margin-bottom: 10px;
        line-height: 1.5em;
        @include contentFontSize;
      }
    }
  }
}
</style>
