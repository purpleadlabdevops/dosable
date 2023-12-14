<template>
  <section class="checkout__start" :class="checkoutHide ? 'checkout__start-hide' : ''">
    <svg class="checkout__logo" xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none"><path d="M26.4395 18.5298L15.6275 6.36712H14.3725L3.5585 18.532L3.5365 0H0V27H1.3615L15.0005 10.8077L28.5975 26.8985L28.683 27H30V0H26.4175L26.4395 18.5298Z" fill="#CDFCB1"/></svg>
    <div class="checkout__consult">DOCTOR CONSULTATION</div>
    <div class="container">
      <p>
        Your Winona doctor visit is free and includes unlimited follow-ups. Assuming there are not any questions or concerns from you or the doctor, and the doctor feels the treatments selected are safe, the prescriptions will be filled. You will have the opportunity to message your doctor directly from the patient portal after onboarding is completed. <br><br>
        Coming up, you will confirm your order, along with billing and shipping information. Your card will be authorized, but not charged, until treatment is confirmed by you and your Winona physician.
      </p>
      <button class="btn btn-purple" @click="setStart">CONTINUE</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
const emit = defineEmits(['step']),
      checkoutHide = ref<Boolean>(false)

const setStart = (): void => {
  checkoutHide.value = true
  setTimeout(() => {
    emit('step', 'identity')
  }, 300)
}
</script>

<style lang="scss" scoped>
.checkout{
  &__start{
    background-color: #1a6a72;
    color: #cdfcb1;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 101;
    transition: .5s ease;
    @media(max-width:767px){
      padding-left: 40px;
    }
    &-hide{
      opacity: 0;
      visibility: hidden;
    }
    p{
      font-size: res(18, 24);
    }
    .container{
      max-width: 710px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100vh;
    }
    .btn{
      margin-top: 20px;
      width: 200px;
      padding: 12px 28px;
    }
  }
  &__logo{
    position: absolute;
    left: 12px;
    top: 24px;
    width: 40px;
    height: auto;
  }
  &__consult{
    color: var(--green);
    font-size: res(10, 16);
    letter-spacing: 2.88px;
    position: absolute;
    bottom: res(5, 24);
    left: res(5, 12);
    transform: rotate(-90deg);
    transform-origin: 0 0;
  }
}
</style>