<script setup>
import { ref } from "vue";
import CloseButton from "@/components/CloseButton.vue";

const typeOfVolunteer = ref("volunteer");
const name = ref("");
const email = ref("");
const phoneNo = ref("");
const city = ref("");
const numOfAnimal = ref("");

const appLyHelpSubmit = () => {
  const applyForHelpData = {
    typeOfVolunteer: typeOfVolunteer.value,
    name: name.value,
    email: email.value,
    phoneNo: phoneNo.value,
    city: city.value,
    numOfAnimal: numOfAnimal.value,
  };
  console.log(applyForHelpData);
};
</script>

<template>
  <div class="apply-for-help-page">
    <CloseButton />
    <div class="overlay"></div>
    <form class="form-wrapper" @submit.prevent="appLyHelpSubmit">
      <h1>Please apply if you need our help</h1>
      <label for="who are you"><h2>Who Are you</h2> </label>

      <select name="who are you" class="select-items" v-model="typeOfVolunteer">
        <option value="volunteer">Volunteer</option>
        <option value="shelter">Shelter</option>
        <option value="animal owner">Animal Owner</option>
        <option value="other">Other</option>
      </select>
      <label for="name"><h2>Name</h2> </label>
      <input type="text" name="name" v-model="name" />
      <label for="email"><h2>Email Address</h2> </label>
      <input type="email" name="email" v-model="email" />
      <label for="phoneno"><h2>Phone Number</h2> </label>
      <input type="number" name="phoneNo" v-model="phoneNo" />
      <label for="city"><h2>City</h2> </label>
      <input type="text" name="city" v-model="city" />
      <label for="numanimal"><h2>Number of animals</h2> </label>
      <input type="number" name="numOfAnimal" v-model="numOfAnimal" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.apply-for-help-page {
  display: flex;
  flex-direction: column;
  background-image: url("/assets/images/logo/pattern-logo.svg");
  background-size: 80px;
  background-repeat: repeat;
  background-size: 80px;
  padding: 8vh 10%;
  position: relative;

  @media (min-width: 800px) {
    padding-bottom: 20vh;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: $color-primary;
    border: solid 0.25rem $color-onBackground;
    z-index: 10;

    h1 {
      font-size: 3.75vw;
      margin-top: 0.5em;
      margin-bottom: 1em;
      line-height: 1.5em;

      @media (min-width: 480px) {
        font-size: 2.5vw;
      }
    }

    h2 {
      font-size: 4vw;
      line-height: 1.25em;
      font-weight: 700;
      margin-top: 0.25em;
      margin-bottom: 0.25em;

      @media (min-width: 480px) {
        font-size: 3vw;
      }

      @media (min-width: 800px) {
        font-size: 2vw;
      }
    }

    .select-items {
      border: 0.25rem solid $color-onBackground;
      margin-bottom: 1em;
      padding: 0.25rem 0.5rem;
      line-height: 1.5em;
      font-size: 4vw;

      @media (min-width: 480px) {
        font-size: 3vw;
      }

      @media (min-width: 800px) {
        font-size: 2vw;
      }
    }

    input {
      width: 100%;
      border: 0.25rem solid $color-onBackground;
      padding: 0.25rem 0.5rem;
      font-size: 2vw;
      line-height: 1.5em;
    }

    button {
      width: fit-content;
      font-size: 4vw;
      line-height: 1.5em;
      background-color: $color-background;
      padding: 0.5em 1em;
      margin-top: 1em;
      border: 0.25em solid $color-onBackground;
      transition: all ease-in-out 0.2s;

      &:hover {
        translate: 10px -10px;
      }

      @media (min-width: 480px) {
        margin-top: 2em;
        font-size: 3vw;
        padding: 0.15em 0.5em;
      }

      @media (min-width: 800px) {
        font-size: 2vw;
      }
    }
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: aliceblue;
  opacity: 80%;
}
</style>
