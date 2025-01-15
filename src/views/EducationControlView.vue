<script setup>
import BackHomeButton from "@/components/BackHomeButton.vue";
</script>

<template>
  <div class="educattion-control-page">
    <h1>Education and Control</h1>
    <div class="content-wrapper">
      <p>
        Based on our experience, we understand the importance of using the aid
        efficiently. We chose the main types of volunteering, guardianship, and
        shelter management problems. There are several issues that we believe
        need to be addressed in the first place:
      </p>
      <ul role="list">
        <li>
          education of volunteers and their communication with the shelters,
          foundations, private donors;
        </li>
        <li>social media management and email marketing;</li>
        <li>control over shelter care and wild flocks;</li>
        <li>
          recommendations on the arrangement of space, purchase of medicine,
          distribution of financial or other aid.
        </li>
      </ul>
      <p>
        We want to start online meetings with the animal community to discuss
        various issues, solutions, and strategy plans, because, after all, in
        our opinion, dialogue is crucial in contemporary life.
      </p>
    </div>
    <div class="content-wrapper">
      <h2>Our goal</h2>
      <p>
        Organize lectures on communication, invite guest speakers, coordinate
        processes, set up effective aid management.
      </p>
    </div>

    <BackHomeButton />
  </div>
  <!-- <ContactSection /> -->
</template>

<style lang="scss" scoped>
.educattion-control-page {
  @include paddingHorizontal;
  @include paddingVertical;

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
</style>
