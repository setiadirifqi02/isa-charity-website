<script setup>
import Heroimage from "/assets/images/war-aid.jpeg";
import ImageSlider from "@/components/ImageSlider.vue";
import BackHomeButton from "@/components/BackHomeButton.vue";
</script>

<template>
  <div class="emergency-aid-war-page">
    <img :src="Heroimage" alt="hero-image" class="hero-image" />
    <div class="main-container">
      <h1>Emergency Aid. WAR 2022.</h1>
      <div class="content-wrapper">
        <p>
          24.02.2022 - the day when the world got divided into Before and After.
        </p>
        <p>
          Life would never be the same. Russia attacked Ukraine. Thousands of
          victims, children, and vast numbers of dead animals or those who have
          lost their homes.
        </p>
        <p>
          We are incredibly grateful to the People, despite everything, who did
          not leave their little friends behind, but unfortunately, there are
          many examples to the contrary. Sometimes it happened due to owners’
          ignorance or death, and other times because of other terrible
          circumstances that forced animals to become homeless. A humanitarian
          catastrophe has begun. Thousands of lost and wounded animals are
          wandering the deserted cities and villages, searching for some kind of
          salvation.
        </p>
        <p>
          Even before the war, we kept the records of shelters and guardians in
          Ukraine; therefore, we have much information from urgent needs to
          food, medicine, and other necessary services. Since the beginning of
          the full-scale war, the database was joined by: a massive number of
          homeless animals, relocated animals from hot spots to more peaceful
          regions, and increased needs during an unstable economic situation in
          the country. Shortage of animal feed, medicine, volunteers.
        </p>
      </div>

      <div class="content-wrapper">
        <h2>Our goal</h2>
        <p>
          To provide emergency humanitarian aid from abroad; implement logistics
          in Ukraine; assist in coordinating evacuations, transportation, and
          financial aid.
        </p>
      </div>
      <ImageSlider />
      <BackHomeButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.emergency-aid-war-page {
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

      @media (min-width: 480px) {
        font-size: 4vw;
        width: 100%;
      }
    }
    .content-wrapper {
      margin: 2rem 0;

      h2 {
        font-size: 3.75vw;
        line-height: 1.5em;

        @media (min-width: 480px) {
          font-size: 2.5vw;
        }
      }

      p {
        margin-top: 0.5em;
        margin-bottom: 1em;
        line-height: 1.5em;
        @include contentFontSize;
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
