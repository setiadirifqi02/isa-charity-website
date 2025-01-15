<script setup>
import youtube from "/assets/icons/youtube.svg";
import instagram from "/assets/icons/instagram.svg";

import facebook from "/assets/icons/facebook.svg";
import patreon from "/assets/icons/patreon.svg";
import telegram from "/assets/icons/telegram.svg";
</script>

<template>
  <div class="social-link-container">
    <a
      href="https://www.youtube.com/channel/UCflad3HMzVzumevfDEqJFFQ/featured"
      class="social-icon-wrapper"
    >
      <img :src="youtube" alt="" class="social-icon" />
    </a>
    <a
      href="https://www.instagram.com/isa.official.ua/"
      class="social-icon-wrapper"
    >
      <img :src="instagram" alt="" class="social-icon" />
    </a>
    <a href="https://www.facebook.com/isa.co.ua" class="social-icon-wrapper">
      <img :src="facebook" alt="" class="social-icon" />
    </a>
    <a href="https://www.patreon.com/isa_co_ua" class="social-icon-wrapper">
      <img :src="patreon" alt="" class="social-icon" />
    </a>
    <a href="https://t.me/isa_co_ua" class="social-icon-wrapper">
      <img :src="telegram" alt="" class="social-icon" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social-link-container {
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  font-size: 20px;
  margin-top: 2rem;

  @media (min-width: 480px) {
    margin-top: 0;
  }

  .social-icon-wrapper {
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(80%);
    }

    &:first-child {
      padding-left: 0;
    }
  }

  .social-icon {
    height: 2rem;

    @media (min-width: 480px) {
      height: 2.5rem;
    }

    @media (min-width: 800px) {
      height: 3rem;
    }
  }
}
</style>
