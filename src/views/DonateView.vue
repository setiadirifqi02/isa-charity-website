<script setup>
import CloseButton from "@/components/CloseButton.vue";
import visalogo from "/assets/images/logo/visa-logo.png";
import ContactSection from "@/components/sections/ContactSection.vue";
</script>

<template>
  <div class="donate-page">
    <CloseButton />
    <div class="overlay"></div>
    <div class="main-container">
      <div class="donate-section">
        <h1>Donate Please,</h1>
        <p>we need your support like never before</p>
      </div>
      <div class="donate-section">
        <p>Single payment</p>
        <p>Card Number: <strong>4731 2196 1647 4239</strong></p>
        <p>
          Fondy direct link:
          <a href="https://pay.fondy.eu/s/EdDlsY6XgRHV"
            >pay.fondy.eu/s/EdDlsY6XgRHV</a
          >
        </p>
      </div>
      <div class="donate-section">
        <div class="visa-wrapper">
          <p>Subcribe and be our regular patron</p>
          <div class="visa-image">
            <img :src="visalogo" alt="visa and mastercard logo" srcset="" />
          </div>
        </div>
        <div class="donate-link">
          <a href="">Fondy</a>
          <a href="">Patreon</a>
        </div>
      </div>
      <div class="donate-section">
        <p>Cryptocurrency<br /></p>
        <p><strong>BTC </strong>1JzRCN5copEPkE1nc uT7z5eTbPZBxvPYb3</p>
        <p><strong>ETH </strong>0x7b8916382387d2c34b4bcd38da f7071a1bb30dba</p>
      </div>
      <div class="donate-section">
        <p>PayPal</p>
        <p>
          <strong>paypal@isa.co.ua</strong>
        </p>
      </div>
      <div class="donate-section">
        <div class="donate-item">
          <p>SWIFT in Euro (EUR)</p>
          <p><strong>Beneficiary :</strong></p>
          <p>
            Account (IBAN):
            <strong>UA143123560000026007300972110</strong>&nbsp;<br />CO “CF
            “INNOVATIVE SOLUTIONS FOR ANIMALS”&nbsp;<br />Address: Ukraine,
            Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office 603
          </p>
          <p>
            <strong> Correspondent bank:&nbsp; </strong>
          </p>
          <p>
            BIC (SWIFT) CODE: DEUTDEFF<br />Bank name: DEUTSCHE BANK AG,
            Frankfurt am Main&nbsp;<br />Account: 947057610
          </p>
          <p><strong>Beneficiary’s Bank :</strong></p>
          <p>
            BIC (SWIFT) CODE: COSBUAUKZAK<br />Bank name : JCS STATE SAVINGS
            BANK OF UKRAINE<br />Bank address: KIEV, UKRAINE&nbsp;
          </p>
        </div>
      </div>
      <div class="donate-section">
        <div class="donate-item last">
          <p>SWIFT in US dollars (USD)</p>
          <p><strong> Beneficiary: </strong></p>
          <p>
            Account (IBAN):
            <strong>UA143123560000026007300972110</strong>&nbsp;<br />CO “CF
            “INNOVATIVE SOLUTIONS FOR ANIMALS”&nbsp;<br />Address: Ukraine,
            Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office 603
          </p>
          <p>
            <strong> Correspondent bank:&nbsp; </strong>
          </p>
          <p>
            BIC (SWIFT) CODE: BKTRUS33<br />Deutsche Bank Trust Company
            Americas, New York, USA<br />Account: 04-095-334
          </p>
          <p>
            <strong> Account With Institution: </strong>
          </p>
          <p>
            BIC (SWIFT) CODE: COSBUAUKZAK<br />Bank name : JCS STATE SAVINGS
            BANK OF UKRAINE UZHHOROD BRANCH<br />Bank address: KIEV, UKRAINE
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.donate-page {
  display: flex;
  flex-direction: column;
  background-image: url("/assets/images/logo/pattern-logo.svg");
  background-size: 80px;
  background-repeat: repeat;
  padding: 8vh 10%;
  position: relative;

  @media (min-width: 800px) {
    padding-bottom: 20vh;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    @include borderContent($color-onBackground);
    z-index: 10;

    .donate-section {
      padding: 2rem;
      background-color: $color-accent;
      border-bottom: solid 0.25rem $color-onBackground;

      h1 {
        font-size: 10vw;
        line-height: 1.25em;
        font-weight: 700;

        @media (min-width: 480px) {
          font-size: 4vw;
        }
      }

      p {
        font-size: 3.75vw;
        line-height: 1.5em;
        margin-bottom: 0.5em;

        @media (min-width: 480px) {
          font-size: 2.5vw;
        }
      }

      a {
        font-weight: 700;
      }

      .visa-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          width: 50%;

          @media (min-width: 480px) {
            width: 80%;
          }
        }

        .visa-image {
          width: 50%;

          img {
            width: 90%;
            margin-left: 0.5rem;

            @media (min-width: 480px) {
              width: 50%;
            }
          }
        }
      }
      .donate-link {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;

        a {
          padding: 0.25em 0.5em;
          background-color: $color-background;
          border: solid 0.25em $color-onBackground;
          font-weight: 400;

          @media (min-width: 480px) {
            font-size: 2.5vw;
          }
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
}
</style>
