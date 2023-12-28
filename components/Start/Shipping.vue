<template>
  <section class="start__step shipping">
    <div class="container">
      <h2>Shipping Information & Address</h2>
      <div class="h7">Please confirm the address of where you would like your Winona products shipped. We ship USPS Priority unless otherwise requested.</div>
      <form @submit.prevent="submitForm" class="form">
        <FieldText
          v-model="firstName"
          label="First name*"
          placeholder="First name"
          autocomplete="given-name"
          class="form__field-6"
          :required="true" />
        <FieldText
          v-model="lastName"
          label="Last name*"
          placeholder="Last name"
          autocomplete="family-name"
          class="form__field-6"
          :required="true" />
        <FieldEmail
          v-model="email"
          label="Email*"
          placeholder="Email"
          autocomplete="email"
          :required="true" />
        <FieldText
          v-model="address"
          label="Street Address*"
          placeholder="Street Address"
          autocomplete="street-address"
          class="form__field-8"
          :required="true" />
        <FieldText
          v-model="apartment"
          label="Apartment"
          placeholder="Apartment"
          class="form__field-4"
          autocomplete="address-line2" />
        <FieldText
          v-model="city"
          label="City*"
          placeholder="City"
          class="form__field-6"
          autocomplete="address-level2"
          :required="true" />
        <FieldStates
          v-model="state"
          label="State*"
          class="form__field-6"
          autocomplete="address-level1"
          :required="true" />
        <FieldPhone
          v-model="phone"
          label="Phone*"
          placeholder="Phone Number"
          autocomplete="phone"
          class="form__field-8"
          :required="true" />
        <FieldText
          v-model="zip"
          label="Zip Code*"
          placeholder="Zip Code"
          autocomplete="postal-code"
          class="form__field-4"
          :required="true" />
        <div class="form__field">
          <button class="btn btn-red" type="submit" @click.prevent="submitForm">
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
      phone     = ref<string>(''),
      email     = ref<string>('')

const formFeedback = ref<string | null>(''),
      textFeedback: { [key: string]: string; } = {
        error: 'There was an error processing your request.',
        success: 'Shipping information was saved.',
        incomplete: 'Please complete all required fields.',
        phone: 'Please enter a valid phone number.',
        email: 'Please enter a valid email.',
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
    || !email.value.trim()
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
    email: email.value,
    phone: Number(phone.value.replace(/[^\dA-Z]/g, ''))
  })

  useGtm().trackEvent({
    event: 'Shipping',
    label: 'Shipping',
    category: 'category',
    action: 'click',
  })

  emit('step', 'payment')
  globalStore.setOnboarding(80)
}
</script>

<style lang="scss">
.shipping{
  h2{
    margin-bottom: 12px;
  }
  .form{
    margin-top: 40px;
    margin-bottom: 30px;
    max-width: 618px;
    margin-left: auto;
    margin-right: auto;
    [type="submit"]{
      margin-top: 3rem;
    }
  }
  .h7{
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>