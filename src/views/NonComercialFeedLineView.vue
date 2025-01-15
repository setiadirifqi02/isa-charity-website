<script setup>
import Heroimage from "/assets/images/non-comercial-feed-line.jpeg";
import BackHomeButton from "@/components/backhomebutton.vue";
</script>

<template>
  <div class="non-commercial-feed-line-page">
    <img :src="Heroimage" alt="hero-image" class="hero-image" />

    <div class="main-container">
      <h1>Non-commercial feed line</h1>
      <div class="content-wrapper">
        <p>
          The ISA team has provided social assistance to homeless animals for
          many years. We have come a long way in understanding the basic
          everyday problems with the maintenance and treatment of street dogs
          and cats, namely the purchase of food, medicine, veterinary services,
          and volunteer household needs.
        </p>
        <p>
          For a long time, we observed the tendencies of the charitable
          volunteer community and analyzed the main issues of our business
          today. We believe that every year Ukrainians become more responsible
          and aware of what concerns our environment, so charitable funds should
          not go to commerce, taxes, and low-quality products. Based on our
          experience and thanks to the support of socially active companies,
          volunteers, and citizens - we are launching the first manufacturing
          project in Ukraine. We can build a line for manufacturing the
          non-commercial feed, not for sale but to support low-budget shelters,
          volunteers, and guardians throughout Ukraine.
        </p>
      </div>
      <div class="content-wrapper">
        <h2>Our goal</h2>
        <p>
          To establish the seamless operation of the line to manufacture a
          high-protein complete feed diet for dogs and cats with the possibility
          of processing wet meat and raw fish materials.
        </p>
      </div>
      <BackHomeButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.non-commercial-feed-line-page {
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
