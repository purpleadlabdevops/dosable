<template>
  <div class="page page__start start">
    <StartStatus />
    <StartForm     @step="setStep" v-if="step === 'form'" />
    <StartRadio    @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'radio'" />
    <StartCheckbox @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'checkbox'" />
    <StartTextarea @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'textarea'" />
    <StartImages   @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'images'" />
    <StartProducts @step="setStep" v-if="step === 'products'" />
    <StartIinfo    @step="setStep" v-if="step === 'iinfo'" />
    <StartIdentity @step="setStep" v-if="['identity', 'ideModal'].includes(step)" />
    <StartIdeModal @step="setStep" v-if="step === 'ideModal'" />
    <StartSummary  @step="setStep" v-if="['summary', 'safety', 'cart'].includes(step)" />
    <StartCart     @step="setStep" v-if="step === 'cart'" />
    <StartSafety   @step="setStep" v-if="step === 'safety'" />
    <StartShipping @step="setStep" v-if="step === 'shipping'" />
    <StartPayment  @step="setStep" v-if="['payment', 'billing'].includes(step)" />
    <StartBilling  @step="setStep" v-if="step === 'billing'" />
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

const step = ref<string>('form'),
      globalStore = useGlobalStore()

const setStep = (val: string): void => {
  step.value = val
  if(['safety', 'ideModal', 'cart', 'billing'].includes(val)){
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
.start__info{
  position: fixed;
  padding: 1rem;
  background: var(--red);
  color: var(--white);
  left: 0;
  top: 0;
  z-index: 999;
}
</style>
