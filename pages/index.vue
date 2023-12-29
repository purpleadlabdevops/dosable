<template>
  <div class="page page__home">
    <HomeBanner />
    <HomeBacked />
    <HomeComp />
    <HomeCustomers />
    <HomeReview />
    <HomeAdvantages />
    <HomeFaq />
    <HomeTreatments />
    <HomeDeal />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/stores/global';
const globalStore = useGlobalStore()

useHead({
  title: 'Home page'
})

if(process.client){
  globalStore.setWidth(window.innerWidth)
  window.addEventListener('resize', () => {
    globalStore.setWidth(window.innerWidth)
  })
}

if(globalStore.products['product_2'].price === 0){
  getCampaign()
}

onMounted(() => {
  setTimeout(() => {
    useGtm().trackEvent({
      event: 'PageView',
      label: 'PageView',
      category: 'category',
      action: 'click',
    })
  }, 2000)
  globalStore.setUrl(window.location.href)
})
</script>
