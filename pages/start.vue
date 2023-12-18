<template>
  <div class="page page__start start">
    <StartStatus />
    <StartBirthday @step="setStep" v-if="step === 'birthday'" />
    <StartSex      @step="setStep" v-if="step === 'sex'" />
    <StartForm     @step="setStep" v-if="step === 'form'" />
    <StartRadio    @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'radio'" />
    <StartCheckbox @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'checkbox'" />
    <StartTextarea @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'textarea'" />
    <StartImages   @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'images'" />
    <StartProducts v-if="step === 'products'" />
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

definePageMeta({
  layout: 'start'
})

useHead({
  title: 'Start Free Visit'
})

const step = ref<string>('birthday'),
      globalStore = useGlobalStore()

const setStep = (val: string): void => {
  step.value = val
}
</script>

<style lang="scss" scoped></style>