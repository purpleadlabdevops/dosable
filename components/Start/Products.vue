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

const getCampaign = async () => {
  const { data } = await useFetch('/api/konnektive', {
    method: 'post',
    body: JSON.stringify({
      endpoint: '/campaign/query',
      params: {
        campaignId: 21
      }
    }),
    onResponseError({ request, response, options }) {
      console.log('onResponseError')
      console.dir(response)
      return
    }
  })
  console.dir(data)
  if(data.value && data.value.result === 'SUCCESS'){
    console.dir(data.value.message.data[21])
    globalStore.setCampaign(data.value.message.data[21])
  }
}
getCampaign()

const nextIdentify = (): void => {
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
