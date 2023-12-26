<template>
  <section class="start__step products">
    <div class="container">
      <h2>PRODUCT RECOMMENDATIONS</h2>
      <div class="h7">Based on your symptoms and preference, Dosable Physician suggests...</div>
      <div class="h8">Choose a plan. Don't worry - you can tweak this later, and your doctor will review if this treatment is right for you.</div>
      <div class="products__list">
        <ProductRadio v-for="(product, index) in globalStore.products" :data="product" :ID="index" :key="index" />
        <ProductCheckbox :data="globalStore.supplements.product_4" ID="product_4" />
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
  let valid: boolean = true
  const products = Object.values(globalStore.products).find(item => item.model === true)
  if(!products){
    alert(' Please select at least one product. Because of your medical history, it would not be safe to take Estrogen without Progesterone.')
    return
  }
  console.log('GTM ProductSelection - '+ dataLayer.push({'event': 'ProductSelection'}) )
  emit('step', 'iinfo')
  globalStore.setOnboarding(20)
}

const back = (): void => {
  emit('step', 'question')
}

onMounted(() => {
  console.log('GTM IntakeComplete - '+ dataLayer.push({'event': 'IntakeComplete'}) )
})
</script>
