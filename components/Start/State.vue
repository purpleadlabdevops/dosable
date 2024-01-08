<template>
  <section class="start__step sex">
    <div class="container">
      <h2>Let’s make sure we’re available in your state</h2>
      <h6>What state do you live in?</h6>
      <div class="start__form">
        <form @submit.prevent="submitForm" class="form">
          <FieldStates
            v-model="state"
            label="States*"
            placeholder="States"
            autocomplete="state"
            :required="true" />

          <div class="form__field form__checkbox">
            <input id="agree" type="checkbox" v-model="agree" />
            <label for="agree">I have read and agree to these <nuxt-link to="/terms" target="_blank">Terms & Conditions</nuxt-link>, <nuxt-link to="/privacy" target="_blank">Privacy Policy</nuxt-link> and <nuxt-link to="/telehealth" target="_blank">Telehealth Consent</nuxt-link></label>
          </div>

          <div class="form__field">
            <button
              class="btn btn-red"
              type="submit"
              :disabled="loading || !agree">
              {{ loading ? 'Loading...' : 'CONTINUE' }}
            </button>
          </div>
          <div class="form__field form__feedback" v-if="error">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore(),
      emit = defineEmits(['step'])

const loading = ref<boolean>(false),
      error   = ref<string | boolean>(false),
      state   = ref<string>(''),
      agree   = ref<boolean>(false)

const submitForm = () => {
  loading.value = true
  const declineState = ['American Samoa', 'Guam', 'Northern Mariana Islands', 'Puerto Rico', 'Virgin Islands']
  if(declineState.includes(state.value)){
    error.value = `At the moment, we don't offer treatment in your state.`
    setTimeout(() => {
      error.value = false
    }, 2500)
    return
  }
  console.log(2)
  emit('step', 'form')
}
</script>

<style lang="scss" scoped>
.start{
  &__form{
    max-width: 630px;
  }
}
</style>