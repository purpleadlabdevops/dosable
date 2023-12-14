<template>
  <section class="shipping">
    <div class="container">
      <h2>Shipping Information & Address</h2>
      <p>Please confirm the address of where you would like your Winona products shipped. We ship USPS Priority unless otherwise requested.</p>
      <form @submit.prevent="submitForm" class="form">
        <FieldText
          :value="firstName"
          label="First name*"
          placeholder="First name"
          autocomplete="given-name"
          class="form__field-6"
          :required="true" />
        <FieldText
          :value="lastName"
          label="Last name*"
          placeholder="Last name"
          autocomplete="family-name"
          class="form__field-6"
          :required="true" />
        <FieldText
          :value="address"
          label="Street Address*"
          placeholder="Street Address"
          autocomplete="street-address"
          class="form__field-8"
          :required="true" />
        <FieldText
          :value="apartment"
          label="Apartment/Suite"
          placeholder="Apartment/Suite"
          class="form__field-4"
          autocomplete="address-line2" />
        <FieldText
          :value="city"
          label="City*"
          placeholder="City"
          autocomplete="address-level2"
          :required="true" />
        <FieldStates
          :value="state"
          label="State*"
          autocomplete="address-level1"
          :required="true" />
        <FieldPhone
          :value="phone"
          label="Phone*"
          placeholder="Phone Number"
          autocomplete="phone"
          class="form__field-8"
          :required="true" />
        <FieldText
          :value="zip"
          label="Zip Code*"
          placeholder="Zip Code"
          autocomplete="postal-code"
          class="form__field-4"
          :required="true" />
        <div class="form__field">
          <button class="btn" type="submit" @click.prevent="submitForm">
            {{ isLoading ? 'Loading...' : 'CONTINUE' }}
          </button>
        </div>
        <Transition name="slide">
          <div class="form__field form__feedback" v-if="formFeedback">
            {{ textFeedback[formFeedback] }}
          </div>
        </Transition>
      </form>
      <p class="form__small">Treatment will ship by USPS. If your address cannot receive USPS postage please let your physician know.</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore(),
      emit = defineEmits(['step'])

/* -----START MODELS----- */
const isLoading = ref<boolean>(false),
      success   = ref<string | boolean>(true),
      firstName = ref<string>(''),
      lastName  = ref<string>(''),
      address   = ref<string>(''),
      apartment = ref<string>(''),
      city      = ref<string>(''),
      state     = ref<string>(''),
      zip       = ref<string>(''),
      phone     = ref<string>('')

const formFeedback = ref<string | null>(''),
      textFeedback: { [key: string]: string; } = {
        error: 'There was an error processing your request.',
        success: 'Shipping information was saved.',
        incomplete: 'Please complete all required fields.',
        phone: 'Please enter a valid phone number.',
      }

const setFeedback = (type: string, status: any) => {
  formFeedback.value = type
  isLoading.value = false
  success.value = status
  setTimeout(() => {
    formFeedback.value = null
  }, 4000)
}

const submitForm = () => {
  isLoading.value = true
  formFeedback.value = null

  if(
    !address.value.trim()
    || !city.value.trim()
    || !state.value.trim()
    || !zip.value.trim()
    || !phone.value.trim()
    || !firstName.value.trim()
    || !lastName.value.trim()
  ){
    setFeedback('incomplete', null)
    return
  }

  if (phone.value && phone.value.length < 15) {
    setFeedback('phone', false)
    return
  }

  setFeedback('success', true)

  globalStore.changeShipping({
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    apartment: apartment.value,
    city: city.value,
    state: state.value,
    zip: zip.value,
    phone: phone.value
  })
  emit('step', 'payment')
}

onMounted(() => {
  setTimeout(()=>{
    globalStore.changeProgress(65)
  }, 500)
})
</script>

<style lang="scss">
.shipping{
  padding-top: 170px;
  padding-bottom: 50px;
  .container{
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  h2{
    font-weight: 500;
    font-size: 25px;
    letter-spacing: -0.768px;
    margin-bottom: 12px;
    font-family: "Atten New";
  }
  .form{
    margin-top: 40px;
    margin-bottom: 30px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: 1s ease;
  max-height: 1000px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0px;
  transition: .5s ease;
}
</style>