<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".about-video",
    {
      y: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: { trigger: ".about-video" },
    },
    {
      y: 0,
      opacity: 100,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".about-video",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
</script>

<template>
  <div class="padding-vertical"></div>
  <div class="about-section">
    <h2>We are</h2>
    <div class="about-text">
      <p>
        team of like-minded people, socially active companies, media
        personalities, volunteers who help low-income shelters and foster carers
        to support homeless animals.
      </p>
    </div>
    <h2>Our primary goal</h2>
    <div class="about-text">
      <p>
        is to provide animals with the most necessary things - food, medicine,
        and urgent needs for the livelihood of shelters.
      </p>
    </div>
    <blockquote class="quote">
      Animals need to have friends. Just like humans.<br />
      - James Herriot, All Creatures Great and Small
    </blockquote>
    <div class="about-text">
      <p>
        Who else if not we should support our younger brothers, especially in
        difficult times? Let's be friends!
      </p>
    </div>

    <iframe
      src="https://www.youtube.com/embed/5Wk1rp99B7o?si=xPkPcg8JGGQYgbjd"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class="about-video"
    ></iframe>
  </div>
</template>
<style lang="scss" scoped>
.padding-vertical {
  @include paddingVertical;
}
.about-section {
  display: flex;
  flex-direction: column;
  @include paddingHorizontal;
  overflow: hidden;

  h2 {
    @include mainHeading;
  }

  .about-text {
    margin-top: 0.5em;
    margin-bottom: 1em;
    line-height: 1.5em;
    @include contentFontSize;
  }

  .quote {
    padding: 1rem;
    margin-left: 0.25rem;
    border-left: solid 0.25rem $color-accent;
    font-style: italic;
    font-weight: 400;
    @include contentFontSize;
  }

  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
    @include borderContent($color-onBackground);
    margin-top: 2rem;
  }
}
</style>
