<template>
  <section class="start__step thanks">
    <div class="container">
      <h2>Success! Your visit has been sent to a doctor:</h2>
      <div class="h7">Okay great! Dosable Fhysician is reviewing your completed medical questionnaire, and will reply to you shortly.</div>
      <div class="h7 thanks__text">
        What's Next?
        <ul>
          <li>You will be paired with a board-certified Dosable Physician in your state</li>
          <li>The Dosable Physician will review your medical questionnaire and determine the treatment plan that is the best fit for you</li>
          <li>They will reach out to you through the patient portal to address any questions</li>
          <li>If they determine the right treatment plan for you, they will prescribe and process you treatment.</li>
        </ul>
      </div>
      <nuxt-link class="btn btn-red" to="/account">go to patient dashboard</nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.thanks{
  h2{}
  .h7{
    margin-bottom: res(16, 32);
    max-width: 590px;
    margin-left: auto;
    margin-right: auto;
  }
  ul{
    padding-left: 1.5rem;
  }
  li{
    list-style: disc;
    font-weight: 700;
  }
  &__text{
    text-align: left;
  }
  .btn{
    margin-top: 2rem;
  }
}
</style>