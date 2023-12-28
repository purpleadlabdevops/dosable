<template>
  <section class="start__step sex">
    <div class="container">
      <h6><b>Please get started with your doctor visit by creating an account below. All the information you provide is legally required to provide medical care.</b></h6>
      <div class="start__form">
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

          <FieldGender
            v-model="gender"
            label="Gender*"
            class="form__field-6"
            :required="true" />

          <FieldBirthday
            v-model="birthday"
            label="Birthday*"
            class="form__field-6"
            :required="true" />

<!--           <FieldStates
            v-model="state"
            label="State*"
            autocomplete="address-level1"
            class="form__field-6"
            :required="true" /> -->

<!--           <FieldPhone
            v-model="phone"
            label="Phone*"
            placeholder="Phone Number"
            autocomplete="phone"
            class="form__field-6"
            :required="true" /> -->

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
        <div class="h9 start__secure">
          <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_305_1633)"><path d="M4.42447 8.15582V8.27347H4.54212H10.3991H10.5167V8.15582V5.97297C10.5167 5.13824 10.2182 4.42252 9.62414 3.83236C9.03014 3.24223 8.31009 2.94593 7.47059 2.94593C6.63109 2.94593 5.91104 3.24223 5.31704 3.83236C4.723 4.42252 4.42447 5.13824 4.42447 5.97297V8.15582ZM2.34659 8.27347H2.46424V8.15582V5.97297C2.46424 4.61062 2.95417 3.44378 3.93969 2.46629C4.92369 1.4887 6.1003 1 7.47059 1C8.84096 1 10.0174 1.48706 11.0013 2.46616C11.9869 3.44534 12.477 4.61228 12.477 5.97297V8.15419V8.27184H12.5946H12.961C13.2359 8.27184 13.4639 8.36582 13.6552 8.55575C13.8469 8.74764 13.9412 8.97409 13.9412 9.24644V15.7917C13.9412 16.0642 13.8468 16.2904 13.6554 16.4806C13.4642 16.6706 13.2344 16.7647 12.961 16.7647H1.98012C1.70519 16.7647 1.47709 16.6707 1.28573 16.4806C1.09446 16.2905 1 16.0627 1 15.7917V9.24644C1 8.974 1.09439 8.74774 1.28573 8.55765C1.47702 8.3676 1.70674 8.27347 1.98012 8.27347H2.34659Z" fill="#083952" stroke="#083952" stroke-width="0.235294"/></g><defs><clipPath id="clip0_305_1633"><rect width="14" height="17" fill="white"/></clipPath></defs></svg>
          Any information you submit is encrypted within our secure platform.
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore(),
      emit = defineEmits(['step'])

/* -----START MODELS----- */
const isLoading = ref<boolean>(false),
      success   = ref<string | boolean>(true),
      firstName = ref<string>(''),
      lastName  = ref<string>(''),
      birthday  = ref<string>(''),
      gender    = ref<string>('')
      // state     = ref<string>('AZ')
      // phone     = ref<string>('')

const formFeedback = ref<string | null>(''),
      textFeedback: { [key: string]: string; } = {
        error: 'There was an error processing your request.',
        success: 'Shipping information was saved.',
        incomplete: 'Please complete all required fields.',
        over: 'You must be over 21 years old.',
        older: `You mustn't be older than 80 years old.`,
        // phone: 'Please enter a valid phone number.',
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

  if(firstName.value.length < 2 || lastName.value.length < 2 || birthday.value.length < 10){
    setFeedback('incomplete', null)
    return
  }

  if(birthday.value.length > 9){
    const modelDate: Date  = new Date(birthday.value),
          currentDate: Date  = new Date()

    if(modelDate.getFullYear() > currentDate.getFullYear() - 21){
      setFeedback('over', false)
      return
    }

    if(modelDate.getFullYear() < currentDate.getFullYear() - 80){
      setFeedback('older', false)
      return
    }
  }

  // if (phone.value && phone.value.length < 15) {
  //   setFeedback('phone', false)
  //   return
  // }

  setFeedback('success', true)

  globalStore.setStartData('firstName', firstName.value)
  globalStore.setStartData('lastName', lastName.value)
  // globalStore.setStartData('state', state.value)
  globalStore.setStartData('birthday', birthday.value)
  // globalStore.setStartData('phone', phone.value)

  globalStore.setIntake(10)

  useGtm().trackEvent({
    event: 'IntakeStart',
    label: 'IntakeStart',
    category: 'category',
    action: 'click',
  })

  emit('step', 'question')
}
</script>

<style lang="scss" scoped>
.start{
  &__form{
    max-width: 630px;
  }
  h6{
    position: relative;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  &__secure{
    color: var(--dark-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: res(16, 32);
    @media(max-width:767px){
      font-size: 11px;
    }
    svg{
      margin-right: res(8, 16);
    }
  }
}
</style>