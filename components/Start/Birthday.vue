<template>
  <section class="start__step birthday">
    <div class="container">
      <div class="start__sub h8">Intake</div>
      <h2>When is your birthday?</h2>
      <h6>Age helps us to determine if you are eligible for treatment.</h6>
      <div class="start__form">
        <div class="start__field">
          <input
            id="field_birthday"
            type="tel"
            v-maska
            data-maska="##/##/####"
            placeholder="MM/DD/YYYY"
            v-model="model" />
          <label
            for="field_birthday"
            class="h9">Date of birth*</label>
          <p class="start__error" v-if="error">{{ error }}</p>
        </div>
        <button
          type="button"
          @click.prevent="submit"
          class="btn">
          CONTINUE
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

const model = ref<string>(''),
      error = ref<string | boolean>(false),
      globalStore = useGlobalStore(),
      emit = defineEmits(['step'])

if(globalStore.startData.birthday){
  emit('step', 'sex')
}

const submit = () => {
  const modelDate: Date  = new Date(model.value),
        currentDate: Date  = new Date()

  setTimeout(() => error.value = false, 3000)

  if(!model.value){
    error.value = 'Please insert correct date.'
    return
  }

  if(modelDate.getFullYear() > currentDate.getFullYear() - 21){
    error.value = 'You must be over 21 years old.'
    return
  }

  if(modelDate.getFullYear() < currentDate.getFullYear() - 80){
    error.value = `You mustn't be older than 80 years old.`
    return
  }

  globalStore.setStartData('birthday', model.value)
  emit('step', 'sex')
}
</script>

<style lang="scss" scoped>
.start__form {
  max-width: 300px;
}
</style>