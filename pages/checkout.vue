<template>
  <div class="page page__checkout">
    {{ step }}
    <TransitionGroup name="fade">
      <CheckoutStart         @step="setStep" v-if="step === 'start'" />
      <CheckoutStatus        @step="setStep" v-if="step !== 'start'" />
      <CheckoutIdentity      @step="setStep" v-if="step === 'identity' || step === 'identityModal'" />
      <CheckoutIdentityModal @step="setStep" v-if="step === 'identityModal'" />
      <CheckoutSummary       @step="setStep" v-if="step === 'summary' || step === 'cart' || step === 'safety'" />
      <CheckoutCart          @step="setStep" v-if="step === 'cart'" />
      <CheckoutSafety        @step="setStep" v-if="step === 'safety'" />
      <CheckoutShipping      @step="setStep" v-if="step === 'shipping'" />
      <CheckoutPayment       @step="setStep" v-if="step === 'payment'" />
      <CheckoutBilling       @step="setStep" v-if="step === 'billing'" />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global'

definePageMeta({
  layout: 'checkout'
})

const globalStore = useGlobalStore(),
      step = ref<string>('start')

const setStep = (val: string): void => {
  step.value = val
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity .5s ease;
}
</style>