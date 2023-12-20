<template>
  <div class="page page__start start">
    <div class="start__info">{{ step }}</div>
    <StartStatus />
    <StartBirthday @step="setStep" v-if="step === 'birthday'" />
    <StartSex      @step="setStep" v-if="step === 'sex'" />
    <StartForm     @step="setStep" v-if="step === 'form'" />
    <StartRadio    @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'radio'" />
    <StartCheckbox @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'checkbox'" />
    <StartTextarea @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'textarea'" />
    <StartImages   @step="setStep" v-if="step === 'question' && globalStore.startQuestions[globalStore.startQuestion].type === 'images'" />
    <StartProducts @step="setStep" v-if="step === 'products'" />
    <StartIinfo    @step="setStep" v-if="step === 'iinfo'" />
    <StartIdentity @step="setStep" v-if="['identity', 'ideModal'].includes(step)" />
    <StartIdeModal @step="setStep" v-if="step === 'ideModal'" />
    <StartSummary  @step="setStep" v-if="['summary', 'safety'].includes(step)" />
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

const step = ref<string>('summary'),
      globalStore = useGlobalStore()

const setStep = (val: string): void => {
  step.value = val
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


<style lang="scss">
.products{
  h2{
    margin-bottom: 25px;
  }
  .h7, .h8{
    color: var(--dark-blue)
  }
  .h7{
    margin-bottom: 20px;
    max-width: 570px;
    margin-left: auto;
    margin-right: auto;
  }
  .h8{
    margin-bottom: 87px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
  &__summary{
    h6, .h8{
      text-align: left;
      max-width: 776px;
      margin-left: auto;
      margin-right: auto;
    }
    .h8{
      margin-top: 2rem;
    }
  }
}
</style>