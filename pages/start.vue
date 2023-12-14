<template>
  <div class="page page__start start">
    <StartStatus />
    <TransitionGroup name="fade">
      <StartBirthday @step="setStep" v-if="step === 'birthday'" />
      <StartSex @step="setStep" v-if="step === 'sex'" />
      <StartForm @step="setStep" v-if="step === 'form'" />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'start'
})

useHead({
  title: 'Start Free Visit'
})

const step = ref<string>('birthday')

const setStep = (val: string): void => {
  step.value = val
}
</script>

<style lang="scss" scoped></style>