<template>
  <section class="start__step products">
    <div class="container">
      <h2>PRODUCT RECOMMENDATIONS</h2>
      <div class="h8">Choose a plan. Don't worry - you can tweak this later, and your doctor will review if this treatment is right for you.</div>
      <div class="products__list">
        <ProductRadio
          v-for="(product, index) in globalStore.products"
          :data="product"
          :ID="index"
          :key="index" />
      </div>
      <div class="start__group">
        <button
          type="button"
          @click.prevent="nextIdentify"
          class="btn btn-red">
          NEXT
        </button>
        <button
          type="button"
          @click.prevent="back"
          class="btn btn-light btn-red_text">
          BACK
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore(),
      emit = defineEmits(['step'])

const nextIdentify = (): void => {
  useGtm().trackEvent({
    event: 'ProductSelection',
    label: 'ProductSelection',
    category: 'category',
    action: 'click',
  })
  emit('step', 'iinfo')
  globalStore.setOnboarding(20)
}

const back = (): void => {
  emit('step', 'question')
}

onMounted(() => {
  useGtm().trackEvent({
    event: 'IntakeComplete',
    label: 'IntakeComplete',
    category: 'category',
    action: 'click',
  })
})
</script>